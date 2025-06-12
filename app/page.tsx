// TODO:
//  * Accept inputs for list from which random selection is made
//  * Button to start  randomisation algorithm
//  * Determine/import randomisation algorithm
//  * Display the random choice

// OPTIONAL FEATURES:
//  * Associated image alongside the chosen option (specialised applications OR pull image from online based on keyword)\
//  * Second page for stats (previous choices, number of choices for each option, etc)
//  * Session persistence

import Header from "@/components/Header";
import ChooseButton from "@/components/ChooseButton";
import {buttonType} from "@/lib/types";
import ErrorMessage from "@/components/errorMessage";

// Icons for Buttons
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const optionsButton:buttonType = {display:"Edit Options", goto:"options"};
const choiceButton:buttonType = {display:"Random Choice", goto:"choice-display"};
const settingsButton:buttonType = {display:<SettingsIcon/>, goto:"settings", isIcon:true};
const statsButton:buttonType = {display:<EqualizerIcon/>, goto:"stats", isIcon: true};

// CHANGE
const optionsAreEmpty = false;
const emptyErrorProps = {
    errorType: "empty",
    errCondition: optionsAreEmpty,
}

export default function Home() {
  return(
      <div className={`flex flex-col justify-center items-center p-8 mb-15 mt-10`}>
          <Header />
          <div className={`flex flex-row gap-4`}>
              <ChooseButton props={optionsButton} />
              <ChooseButton props={choiceButton} />
              <ChooseButton props={settingsButton} />
              <ChooseButton props={statsButton} />
          </div>
          <ErrorMessage props={emptyErrorProps}/>
      </div>
  );
}