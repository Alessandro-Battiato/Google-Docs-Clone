import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    const clerkUser = await currentUser();

    if (!clerkUser) redirect("/sign-in");

    const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;
    // Get the current user from your database
    const user = {
        id,
        info: {
            id,
            name: `${firstName}  ${lastName}`,
            email: emailAddresses[0].emailAddress,
            avatar: imageUrl,
            color: getUserColor(id), // random color for each user
        },
    };

    // Start an auth session inside your endpoint
    const { status, body } = await liveblocks.identifyUser(
        { userId: user.info.email, groupIds: [] },
        { userInfo: user.info } // Optional
    );

    return new Response(body, { status });
}