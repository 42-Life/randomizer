import {ReactElement} from "react";

type buttonDisplay = string | ReactElement;

export type buttonType = {
    display: buttonDisplay;
    isIcon?: boolean;
    goto?: string;
}

export type errorProps = {
    errCondition: boolean;
    errorType: string;
}

export type optionInfo = {
    choice: string;
    image?: string;
}