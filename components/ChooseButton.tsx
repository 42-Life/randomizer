"use client"

import {outfit} from "@/lib/fonts";
import {buttonType} from "@/lib/types";
import {useRouter} from "next/navigation";

export default function ChooseButton({props}: {props:buttonType}) {

    const router = useRouter();

    const handleClick = () => {
        props.goto? router.push(`/${props.goto}`) : router.push(`/`);
    }

    return(
        <button
            className={`
                bg-slate-500 text-gray-100 outline-slate-600 outline-2
                rounded-full text-xl font-normal ${outfit.className}
                hover:text-yellow-300 hover:bg-slate-600 hover:outline-amber-300 hover:outline-2 
                transition duration-750 delay-100 ease-in-out hover:scale-110 
                drop-shadow-md
                ${props.isIcon == true ? `px-4 pb-1` :  `px-8 py-3 mr-2`}
                
            `}
            onClick={handleClick}
        >
            <p>{props.display}</p>
        </button>
    );
}