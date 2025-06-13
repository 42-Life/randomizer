import {ReactElement} from "react";

type buttonDisplay = string | ReactElement;

export type buttonType = {
    display: buttonDisplay;
    mkError?: boolean;
    isIcon?: boolean;
    goto?: string;
    isRandomButton?: boolean;
}

export type errorProps = {
    errCondition: boolean;
    errorType: string;
}

export type optionInfo = {
    choice: string;
    image?: string;
}

export type optionsContextType = {
    numOptions: number;
    setNumOptions: (value:number) => void;
    isEmpty: boolean;
    setIsEmpty: (value:boolean) => void;
    hasRun: boolean;
    setHasRun: (value: boolean) => void;
}