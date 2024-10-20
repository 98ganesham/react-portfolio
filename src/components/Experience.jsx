import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PaddingBox from "../assets/frame/paddingBox";

// Create motion variants for smooth effects
const MotionText = motion(Text);

const Experience = () => {
  return (
    <PaddingBox>
      <Flex
        align="center"
        justifyContent="center"
        textAlign="center"
        p={4}
        flexDirection="column"
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
      >
        <Heading as="h2" mb={2} fontSize={["20px", "22px", "24px"]}  gap={5}>
          <Text color="red.400">My Experience at</Text> <Text color="green.200">Varoon Valley Software House</Text>
        </Heading>
        <Box borderBottom="2px" pt={2} maxWidth="25%" width="100%" borderColor="red.500" />
        <Box justifyContent="center" marginTop={4} fontSize="18px" alignItems="center">
          <Box textAlign={"center"} >
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 0.6, delay: 0.2 }} // Transition settings
            >
              <MotionText
                initial={{ rotateY: -90 }} // Start from the left
                animate={{ rotateY: 0 }} // Rotate to 0 degrees
                transition={{ duration: 0.6 }} // Duration of the flip
              >
                During my enriching journey at Varoon Valley Software House,
                nestled in the heart of innovation, I embarked on a transformative
                journey that propelled my skills in React TypeScript and Laravel
                PHP.
              </MotionText>
              <MotionText
               fontSize="18px"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                As a dedicated member of the Varoon Valley team, I crafted dynamic
                and responsive user interfaces using React TypeScript, while also
                architecting robust backend systems with Laravel PHP.
              </MotionText>
              <MotionText
                fontSize="18px"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                Among the highlights of my time at Varoon Valley Software House
                was my involvement in the Mogok project, leaving an indelible mark
                on the landscape of software development.
              </MotionText>
              <MotionText
                fontSize="18px"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                My experience at Varoon Valley Software House was not merely
                professional, but a personal odyssey of growth and discovery,
                preparing me for new adventures in technology.
              </MotionText>
            </motion.div>
          </Box>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Experience;
