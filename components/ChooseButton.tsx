"use client"

import {outfit} from "@/lib/fonts";
import {buttonType} from "@/lib/types";
import {useRouter} from "next/navigation";
import {useOptionsContext} from "@/lib/ListContext";

// TODO: Fix useContext --> Import isEmpty here --> if isEmpty, then don't re-route and throw error message

export default function ChooseButton({props}: {props:buttonType}) {

    const router = useRouter();
    const { setHasRun, hasRun, setShowError, isEmpty } = useOptionsContext()

    // Logic for button click. Includes special logic to prevent randomization being called on empty inputs
    const handleClick = () => {
        if (!props.isRandomButton || (props.isRandomButton && !isEmpty)) {
            // No errors, therefore can continue to page. Also reset hasRun to false, since successful run occurred
            props.goto? router.push(`/${props.goto}`) : router.push(`/`);
            // if (!hasRun) setHasRun(false);
        } else if (props.isRandomButton) {
            setShowError(true); // error message shows for random button iff options are non-empty
        }
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