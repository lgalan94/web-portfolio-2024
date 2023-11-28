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
 
export default function ButtonGroupAbout() {
 
 const scrollToSection = (sectionId) => {
   const element = document.getElementById(sectionId);
   element.scrollIntoView({ behavior: "smooth" });
 };

 /*const labelProps = {
   variant: "small",
   color: "blue-gray",
   className:
     "absolute top-2/4 -bottom-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
 };*/

 const labelProps = {
   variant: "small",
   color: "blue-gray",
   className:
     "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
 };


  return (
    <div className="sticky top-[65px] lg:top-[90px] w-full">
      <div className="absolute top-0 right-0">
        <SpeedDial placement="bottom">
          <SpeedDialHandler>
            <IconButton size="sm" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-col">
            <SpeedDialAction
              title="About"
              onClick={() => scrollToSection("about-section")}
            >
              <HomeIcon className="h-4 w-4" />
              <Typography {...labelProps}>About Me</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              title="Experience"
              onClick={() => scrollToSection("experience-section")}
            >
              <CogIcon className="h-4 w-4" />
              <Typography {...labelProps}>Experience</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              title="Skills"
              onClick={() => scrollToSection("skills-section")}
            >
              <Square3Stack3DIcon className="h-4 w-4" />
              <Typography {...labelProps}>Skills</Typography>
            </SpeedDialAction>
          </SpeedDialContent>

        </SpeedDial>
      </div>
    </div>
  );
}