import { Box, Heading, Text, Flex, Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaGraduationCap, FaCertificate, FaReact} from "react-icons/fa";
import {SiThealgorithms} from "react-icons/si";
import PaddingBox from "../assets/frame/paddingBox";

// Motion wrapper for animated icons and text


const Education = () => {
  // Snake-like animation variants for icons and text
 

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
            <Flex
            align="center"
            gap={3}
            initial="hidden"
           
          >
            <Icon as={FaGraduationCap} fontSize="2xl" color="#FF7F7F" />
            <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium">
              Bachelor of Science in Computer Science
            </Text>
          </Flex>
          <Text fontSize={["14px", "16px", "18px"]} mt={3} fontWeight="medium">
            Myanmar Route Institute (2024 - Present)
          </Text>
              <Flex
                align="center"
                gap={3}
                initial="hidden"
               
                custom={0.4}
                
              >
                <Icon as={FaCertificate} fontSize="2xl" color="#FF7F7F" />
                <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium">
                  Diploma in Network Communication
                </Text>
              </Flex>
              <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium" mt={2}>
                KMD Computer Center at University of Distance Education, Yangon
              </Text>
            </ListItem>

            {/* Second Course */}
            <ListItem>
              <Flex
                align="center"
                gap={3}
                initial="hidden"
               custom={0.6}
          
              >
                <Icon as={SiThealgorithms} fontSize="2xl" color="#FF7F7F" />
                <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium">
               The Ultimate Data Structures & Alogrithms Bundle
                </Text>
              </Flex>
              <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium" mt={2}>
                Code With Mosh - Completed in 2023 
              </Text>
              <Flex
                align="center"
                gap={3}
                initial="hidden"
              custom={0.6}
                
              >
                <Icon as={FaReact} fontSize="2xl" color="#FF7F7F" />
                <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium">
                React 18 For Beginners with Typescript
                </Text>
              </Flex>
              <Text fontSize={["14px", "16px", "18px"]} fontWeight="medium" mt={2}>
                Code With Mosh - Completed in 2023 
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Education;
