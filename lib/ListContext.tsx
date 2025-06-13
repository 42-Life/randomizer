"use client"

import {createContext, ReactNode, useContext, useState, useEffect} from "react";
import {optionsContextType} from "@/lib/types";

const ListContext = createContext<optionsContextType|undefined>(undefined);

export function OptionsContextProvider({children}:{children?:ReactNode}) {
    // State of the options array
    const [numOptions, setNumOptions] = useState<number>(0);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);

    // Has the Randomize button been pressed? Used for determining error message display
    const [hasRun, setHasRun] = useState(false);

    // For showing error messages
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
        if (numOptions <= 0)
            setIsEmpty(true);
        else
            setIsEmpty(false);
    }, [numOptions]);

    // const addOption = () => setNumOptions(n => n + 1);
    // const deleteOption = () => setNumOptions(n => n - 1);

    return (
        <ListContext.Provider value={{numOptions, setNumOptions, isEmpty, setIsEmpty, hasRun, setHasRun, showError, setShowError}}>
            {children}
        </ListContext.Provider>
    );
}

export function useOptionsContext() {
    const context = useContext(ListContext);
    if (!context) throw new Error("useOptionsContext() must be called within the context");
    return context;
}