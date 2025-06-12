import Link from "next/link";

export default function Return() {
    return(
        <Link href={"/"} className={`text-amber-300 hover:underline hover:underline-offset-5`}>Return Home</Link>
    );
}