import { Box, Heading, Text, Button,  Flex, Image, } from "@chakra-ui/react";
import ProfileImage from '../assets/images/Chaw Be Lar.jpg';
import PaddingBox from "../assets/frame/paddingBox";
import { Link } from "react-router-dom";





const About = () => {
return (
    <PaddingBox >
    <Flex
      direction={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
      justify="space-between"
      align="center"
     mx="auto" // Center horizontally
      p={4} // Padding
      overflow="hidden" // Prevent overflow
    >
      {/* Left Side Content */}
      <Box flex="1" p={4}>
        <Heading  fontSize="24px" mb={1}>
          About Me,
        
         
        </Heading>
        <Box borderBottom="2px" mt={2}  width="25%" borderColor="red.500" /> {/* Red underline */}
        <Text fontSize="18px" mb={2} >
          Web Developer |
        </Text>
        <Text  fontSize="16px">
          My name is Chaw Be Lar. I am  web developer  passionate about crafting exceptional digital experiences. With over a year of hands-on experience in HTML, CSS,  React, JavaScript, TypeScript, NodeJs and Laravel PHP, I've had the privilege of bringing countless ideas to life. From sleek, intuitive user interfaces to robust backend solutions, I thrive on turning visions into reality.
        </Text>
        <Text  fontSize="16px">
          My mission is simple: to craft engaging digital experiences that resonate with users. By staying abreast of emerging technologies and design trends, I ensure that every project I undertake pushes boundaries and sets new standards.
        </Text>
        <Button
        as="a"
        href="/Chaw Be Lar-CV_2.pdf"
        download
        maxWidth="fit-content"
        size="lg"
        mr={4}
        bgColor={"red.400"} 
        mt={4} boxShadow={"lg"} 
        _hover={{backgroundColor: "red.700"}} 
        color ="white"  
        width="100%">
          Download CV
        </Button>
        <Link to="/contact" >
        <Button  bgColor={"red.400"} mt={4} boxShadow={"lg"} _hover={{backgroundColor:"red.700"}} color="white" size="lg">
        Contact Me
        </Button>
        </Link>
      </Box>

      {/* Right Side Profile Image */}
      <Box  flex="1" display="flex" justifyContent="center" alignItems="center">
      <Box
    borderRadius="20px"
    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
    p={4}
    bg="white"
    display="flex"
    justifyContent="center"
    alignItems="center"
    
  >
    <Image
      maxWidth="fit-content"
      maxHeight="fit-content"
      borderRadius="full"
      borderColor="red.300"
      boxSize="250px" // Adjust size as needed
      src={ProfileImage} // Replace with your image path
      alt="Profile"
      objectFit="cover" // Maintain aspect ratio
    />
  </Box>
      </Box>
    </Flex>
    </PaddingBox>
  );
};

export default About;
