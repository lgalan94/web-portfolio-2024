import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export default function SpeedDialWithText() {
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
    <div className="fixed top-20 right-0 h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial placement="left">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative" onClick={() => scrollToSection("about-section")}>
              <HomeIcon className="h-5 w-5" />
              <Typography {...labelProps}>About Me</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative" onClick={() => scrollToSection("experience-section")}>
              <CogIcon className="h-5 w-5" />
              <Typography {...labelProps}>Experience</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative" onClick={() => scrollToSection("education-section")}>
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Education</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative" onClick={() => scrollToSection("skills-section")}>
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Skills</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
