import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaFigma,
  FaLaravel
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiJavascript,
  SiPhp,
  SiChakraui,
  SiTypescript,
  SiFlask,
  SiTensorflow,
} from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";

type IconTechType = {
  name: IconType;
  color: string;
  size?: string;
}

const TechIcons = ({ 
  icon, 
  customColor 
}: {
  icon: string;
  customColor?: string;
}) => {
  const iconMap: Record<string, IconTechType> = {
    react: { name: FaReact, color: "#23CDEB" },
    html: { name: FaHtml5, color: "#E44F26" },
    css: { name: FaCss3Alt, color: "#1572B6" },
    bootstrap: { name: FaBootstrap, color: "#6610F2" },
    postgresql: { name: BiLogoPostgresql, color: "#336791", size: "26px" },
    python: { name: FaPython, color: "#387EB8" },
    javascript: { name: SiJavascript, color: "#F7DF1E" },
    laravel: { name: FaLaravel, color: "#F05340" },
    php: { name: SiPhp, color: "#6181B6" },
    "chakra ui": { name: SiChakraui, color: "#38BDF8" },
    tailwind: { name: RiTailwindCssFill, color: "#38BDF8" },
    typescript: { name: SiTypescript, color: "#007acc" },
    mysql: { name: SiMysql, color: "#ffffff", size: "28px" },
    express: { name: SiExpress, color: "#ffffff" },
    figma: { name: FaFigma, color: "#ffffff" },
    flask: { name: SiFlask, color: "#ffffff" },
    flutter: { name: SiFlutter, color: "#44D1FD" },
    tensorflow: { name: SiTensorflow , color: "#FF6F00" },
  };

  const iconData = iconMap[icon.toLowerCase()];

  if (iconData) {
    const ComponentIcon = iconData.name;
    const componentColor = iconData.color;

    return (
      <Text
        color={customColor ? customColor : componentColor}
        fontSize={iconData.size ? iconData.size : "20px"}>
        <ComponentIcon />
      </Text>
    );
  } else {
    return <Text fontSize="80%">{icon}</Text>;
  }
};

export default TechIcons;
