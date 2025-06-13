// ERROR CASES:
// (1) EMPTY_ERROR: "Choice" button selected, but options[] array is empty
// (2) DUPLICATE_ERROR: Option entered on Options page that exists already in options[] array (duplicate)

import {outfit} from "@/lib/fonts";
import ErrorIcon from '@mui/icons-material/Error';
import {errorProps} from "@/lib/types";
import {ReactElement} from "react";

const errorGroupStyle = `
    bg-red-500 rounded-full
    m-8 mt-20 py-2 px-4
    text-red-200 font-semibold text-sm
    flex flex-row items-center gap-2
    outline outline-red-600 outline-2
    transition-all duration-500 delay-300 ease-in-out
`;

export default function ErrorMessage( {props}:{props:errorProps}) {

    const emptyMessage:string = `Enter options before running`; // true case
    const dupeMessage:string = `This option already exists`; // false case

    return(
        <div className={`${errorGroupStyle} ${props.errCondition ? `opacity-100` : `opacity-0`}`}>
            <ErrorIcon className={`scale-85`}/>
            <p className={`${outfit.className} mr-2`}>{(props.errorType == "empty") ? emptyMessage : (props.errorType == "dupe") ? dupeMessage : ""}</p>
        </div>
    );
}