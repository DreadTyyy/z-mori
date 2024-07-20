import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiJavascript,
  SiPhp,
  SiChakraui,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { PropTypes } from "prop-types";
import { Text } from "@chakra-ui/react";

const TechIcons = ({ icon, customColor }) => {
  const iconMap = {
    react: { name: FaReact, color: "#23CDEB" },
    html: { name: FaHtml5, color: "#E44F26" },
    css: { name: FaCss3Alt, color: "#1572B6" },
    bootstrap: { name: FaBootstrap, color: "#6610F2" },
    python: { name: FaPython, color: "#387EB8" },
    javascript: { name: SiJavascript, color: "#F7DF1E" },
    php: { name: SiPhp, color: "#6181B6" },
    "chakra ui": { name: SiChakraui, color: "#38BDF8" },
    tailwind: { name: RiTailwindCssFill, color: "#38BDF8" },
    mysql: { name: SiMysql, color: "#ffffff", size: "28px" },
    express: { name: SiExpress, color: "#ffffff" },
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

TechIcons.propTypes = {
  icon: PropTypes.string.isRequired,
  customColor: PropTypes.string,
};
