// HEADER:
// Simple header
// TODO: Clicking "Randomizer" will do randomization, and will highlight yellow

import {outfit, overpass} from "@/lib/fonts";
import CasinoIcon from '@mui/icons-material/Casino';

const headerStyling = `
    font-semibold text-5xl 
`;

export default function Header() {
    return(
        <header className={`
            text-gray-100 
            flex justify-center items-center p-8
            drop-shadow-lg/30 drop-shadow-gray-700
            `
        }
        >
            <h1 className={`${headerStyling} ${outfit.className}`}>
                Random Selection Machine
            </h1>
            {/*<CasinoIcon className={`mx-2 scale-110`} />*/}
        </header>
    );
}