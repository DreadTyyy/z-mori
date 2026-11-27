import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import ReactGA from "react-ga4";
import { socialMedia } from "@/utils/socialMedia";

const SocialIcons = () => {
  const handleClickButton = (item: string) => {
    ReactGA.event({ category: "social media", action: "click", label: item });
    // console.log(`Event click: ${item}`);
  };

  return (
    <>
    {socialMedia.map((scl, index) => (
        <motion.div 
          key={index}
          initial={{ transform: "translateY(0px)" }}
          animate={{ 
            transform: [
              "translateY(5px)",
              "translateY(-5px)",
              "translateY(5px)",
            ]
           }}
           transition={{ 
            duration: 1.5,
            ease: "linear",
            delay: index === 1 ? 0 : index * 0.1 + 0.2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop"
            }}
        >
          <Button
            as="a"
            target="_blank"
            href={scl.url}
            onClick={() => handleClickButton(scl.name)}
            px="0"
            color="secondary"
            variant="morilink"
            fontSize="24px"
            filter="drop-shadow(0 0 8px rgb(35, 205, 235))"
            transition="all .3s ease"
            _hover={{
              filter: "drop-shadow(0 0 8px #CAFF30)",
            }}>
            {scl.icon && <scl.icon />}
          </Button>
        </motion.div>
      ))}
    </>
  )
};

export default SocialIcons;
