"use client"

import Link from "next/link";
import {useOptionsContext} from "@/lib/ListContext";
import {useRouter} from "next/navigation";

export default function Return() {

    const router = useRouter();
    const { setHasRun } = useOptionsContext();

    function handleClick() {
        setHasRun(false); // reset
        router.push(`/`); // go home
    }

    return(
        <button className={`text-amber-300 hover:underline hover:underline-offset-5`} onClick={handleClick}>
            Return Home
        </button>
        // <Link href={"/"} className={`text-amber-300 hover:underline hover:underline-offset-5`}>Return Home</Link>
    );
}