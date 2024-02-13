"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
            aria-disabled={pending}
            disabled={pending}
        >
            {pending ? "submitting..." : 'submit'}
        </button>
    )
}

export default SubmitButton;