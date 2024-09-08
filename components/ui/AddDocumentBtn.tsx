"use client";
import React from "react";
import { Button } from "./button";
import Image from "next/image";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const addDocumentHandler = async () => {};

    return (
        <Button
            className="gradient-blue flex gap-1 shadow-md"
            type="submit"
            onClick={addDocumentHandler}
        >
            <Image
                src="/assets/icons/add.svg"
                alt="add"
                width={24}
                height={24}
            />
            <p className="hidden sm:block">Start a blank document</p>
        </Button>
    );
};

export default AddDocumentBtn;
