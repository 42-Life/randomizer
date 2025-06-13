import {ReactElement} from "react";

type buttonDisplay = string | ReactElement;

export type buttonType = {
    display: buttonDisplay;
    isIcon?: boolean;
    goto?: string;
    isRandomButton?: boolean;
}

export type errorProps = {
    errCondition: boolean;
    errorType: string;
    show: boolean;
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
    showError: boolean;
    setShowError: (value: boolean) => void;
}