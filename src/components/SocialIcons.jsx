import { Button } from "@chakra-ui/react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import ReactGA from "react-ga4";

const SocialIcons = () => {
  const handleClickButton = (item) => {
    ReactGA.event({ category: "social media", action: "click", label: item });
    console.log(`Event click: ${item}`);
  };
  return (
    <>
      <Button
        as="a"
        target="_blank"
        href="https://www.instagram.com/adib.zky"
        onClick={() => handleClickButton("instagram")}
        px="0"
        color="secondary"
        variant="morilink"
        fontSize="24px"
        filter="drop-shadow(0 0 8px rgb(35, 205, 235))"
        transition="all .3s ease"
        _hover={{
          filter: "drop-shadow(0 0 8px #CAFF30)",
        }}>
        <FaInstagram />
      </Button>
      <Button
        as="a"
        target="_blank"
        href="https://www.linkedin.com/in/adib-zaky-b1817a248/"
        onClick={() => handleClickButton("linkedin")}
        variant="morilink"
        px="0"
        color="secondary"
        fontSize="24px"
        textShadow="0 0 10 0 rgba(35, 205, 235, 0.6)"
        filter="drop-shadow(0 0 8px rgb(35, 205, 235))"
        transition="all .3s ease"
        _hover={{
          filter: "drop-shadow(0 0 8px #CAFF30)",
        }}>
        <SlSocialLinkedin />
      </Button>
      <Button
        as="a"
        target="_blank"
        href="https://github.com/DreadTyyy/"
        onClick={() => handleClickButton("github")}
        variant="morilink"
        px="0"
        color="secondary"
        textShadow="0 0 10 0 rgba(35, 205, 235, 0.6)"
        fontSize="24px"
        filter="drop-shadow(0 0 8px rgb(35, 205, 235))"
        transition="all .3s ease"
        _hover={{
          filter: "drop-shadow(0 0 8px #CAFF30)",
        }}>
        <FaGithub />
      </Button>
    </>
  );
};

export default SocialIcons;
