import { Box, Heading, Text, Flex, Icon, UnorderedList, ListItem, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaReact} from "react-icons/fa";
import {SiThealgorithms} from "react-icons/si";
import PaddingBox from "../assets/frame/paddingBox";

// Motion wrapper for animated icons and text
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const Education = () => {
  // Snake-like animation variants for icons and text
  const snakeMotionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: [0, -10, 10, 0],  // Snake-like vertical movement
      transition: {
        duration: 4.5,
        delay,
        repeat: Infinity,
        repeatType: "reverse",  // Smooth repeating motion
      },
    }),
  };

  return (
    <PaddingBox>
      <Flex
        alignItems="center"
        justifyContent="center"
        
        textAlign="center"
        paddingX={[2, 4, 6]}
        flexDirection="column"
        
      >
        
      
          <Heading as="h2" fontSize={["20px", "22px", "24px"]} display="flex" gap={5} >
            <Text color="#FF7F7F">My Education</Text>

          </Heading>
          <Box borderBottom="2px" pt={2} width="25%" borderColor="red.500" />
       

        {/* Educational Background */}
        <Box textAlign="center" mt={6}>
         {/* List of Courses */}
    <UnorderedList spacing={4} styleType={"none"} mt={6} >
            {/* First Course */}
            <ListItem >
            <MotionFlex
            align="center"
            gap={3}
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={snakeMotionVariants}
          >
            <Icon as={FaGraduationCap} fontSize="2xl" color="#FF7F7F" />
            <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium">
              Bachelor of Science in Computer Science
            </MotionText>
          </MotionFlex>
          <MotionText fontSize={["14px", "16px", "18px"]} mt={3} fontWeight="medium">
            Myanmar Route Institute (2024 - Present)
          </MotionText>
              <MotionFlex
                align="center"
                gap={3}
                initial="hidden"
                animate="visible"
                custom={0.4}
                variants={snakeMotionVariants}
              >
                <Icon as={FaCertificate} fontSize="2xl" color="#FF7F7F" />
                <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium">
                  Diploma in Network Communication
                </MotionText>
              </MotionFlex>
              <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium" mt={2}>
                KMD Computer Center at University of Distance Education, Yangon
              </MotionText>
            </ListItem>

            {/* Second Course */}
            <ListItem>
              <MotionFlex
                align="center"
                gap={3}
                initial="hidden"
                animate="visible"
                custom={0.6}
                variants={snakeMotionVariants}
              >
                <Icon as={SiThealgorithms} fontSize="2xl" color="#FF7F7F" />
                <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium">
               The Ultimate Data Structures & Alogrithms Bundle
                </MotionText>
              </MotionFlex>
              <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium" mt={2}>
                Code With Mosh - Completed in 2023 
              </MotionText>
              <MotionFlex
                align="center"
                gap={3}
                initial="hidden"
                animate="visible"
                custom={0.6}
                variants={snakeMotionVariants}
              >
                <Icon as={FaReact} fontSize="2xl" color="#FF7F7F" />
                <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium">
                React 18 For Beginners with Typescript
                </MotionText>
              </MotionFlex>
              <MotionText fontSize={["14px", "16px", "18px"]} fontWeight="medium" mt={2}>
                Code With Mosh - Completed in 2023 
              </MotionText>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Education;
