import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

import { GrUserWorker } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
 
export default function ButtonGroupAbout() {
 
 const scrollToSection = (sectionId) => {
   const element = document.getElementById(sectionId);
   element.scrollIntoView({ behavior: "smooth" });
 };

 const labelProps = {
   variant: "small",
   color: "blue-gray",
   className:
     "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
 };


  return (
    <div className="sticky top-[50px] w-full">
      <div className="absolute top-1 right-1">
        <SpeedDial placement="bottom">
          <SpeedDialHandler>
            <IconButton size="sm" color="white" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-col">
            <SpeedDialAction
              title="About"
              onClick={() => scrollToSection("about-section")}
            >
              <SiAboutdotme className="h-4 w-4" />
              <Typography {...labelProps}>About Me</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              title="Experience"
              onClick={() => scrollToSection("experience-section")}
            >
              <GrUserWorker className="h-4 w-4" />
              <Typography {...labelProps}>Experience</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              title="Skills"
              onClick={() => scrollToSection("education-section")}
            >
              <IoMdSchool className="h-4 w-4" />
              <Typography {...labelProps}>Education</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              title="Skills"
              onClick={() => scrollToSection("skills-section")}
            >
              <GiSkills className="h-4 w-4" />
              <Typography {...labelProps}>Skills</Typography>
            </SpeedDialAction>
          </SpeedDialContent>

        </SpeedDial>
      </div>
    </div>
  );
}