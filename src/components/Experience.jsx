import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaReact, FaLaravel, FaPhp, FaJs, FaHtml5 } from "react-icons/fa"; // Import necessary icons
import PaddingBox from "../assets/frame/paddingBox";

const Experience = () => {
  // Dynamic color and shadow for modern effects
  const cardBg = useColorModeValue("white", "gray.600 ");
  const cardShadow = useColorModeValue("lg", "2xl");

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
        gap={6}
      >
        {/* Heading */}
        <Heading
          as="h2"
         fontSize={["28px", "32px", "36px"]}
          fontWeight="bold"
          display={"flex"}
          flexDir={"row"}
          gap={2}
        >
          My Experience at{" "}
          <Text as="span" color={useColorModeValue("green.500", "green.300")}>
            Varoon Valley
          </Text>{" "}
          Software House
        </Heading>
        <Box
          borderBottom="2px"
          pt={1}
          maxWidth="24%"
          width="100%"
          borderColor={useColorModeValue("red.200", "red.400")}
        />

        {/* Programming Languages & Icons Section */}
        <Box mt={4} p={2} mb={6} maxWidth={"fit-content"}>
          <VStack spacing={2}>
            <Text fontSize="xl" fontWeight="semibold" color={useColorModeValue("gray.600", "whiteAlpha.800")}>
              Programming Languages & Frameworks
            </Text>
            <HStack spacing={4} >
              <Avatar bg="blue.500" icon={<FaReact size="24px" color="white" />} boxSize="70px" />
              <Avatar bg="red.500" icon={<FaLaravel size="24px" color="white" />} boxSize="70px" />
              <Avatar bg="blue.300" icon={<FaPhp size="24px" color="white" />} boxSize="70px" />
              <Avatar bg="yellow.400" icon={<FaJs size="24px" color="white" />} boxSize="70px" />
              <Avatar bg="orange.500" icon={<FaHtml5 size="24px" color="white" />} boxSize="70px" />
            </HStack>
          </VStack>
        </Box>

        {/* Experience Details in Clear, Readable Format */}
        <Box
          bg={cardBg}
          p={4}
          rounded="lg"
          boxShadow={cardShadow}
          maxWidth="800px"
          width="100%"
          textAlign="left"
          _hover={{ boxShadow: "xl", transition: "0.3s ease" }}
        >
          <VStack spacing={5} alignItems="flex-start">
            <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue("gray.700", "whiteAlpha.900")}>
              During my time at{" "}
              <Text as="span" color={useColorModeValue("green.500", "green.300")}>
                Varoon Valley
              </Text>{" "}
              Software House, I embarked on a{" "}
              <strong>transformative journey</strong> that refined my skills in both{" "}
              <FaReact style={{ display: "inline-block", marginRight: "5px" }} />
              React TypeScript and{" "}
              <FaLaravel style={{ display: "inline-block", marginRight: "5px" }} />
              Laravel PHP.
            </Text>
            <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue("gray.700", "whiteAlpha.900")}>
              My role involved <strong>crafting dynamic user interfaces</strong> with React while developing 
              <strong>robust back-end systems</strong> using Laravel PHP. This blend of front-end and back-end work gave me a comprehensive understanding of full-stack development.
            </Text>
            <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue("gray.700", "whiteAlpha.900")}>
              One of the most memorable projects was the{" "}
              <FaJs style={{ display: "inline-block", marginRight: "5px" }} />
              Mogok project, which left a lasting impact on my growth as a developer. Working alongside talented colleagues, I helped develop innovative solutions to complex challenges.
            </Text>
            <Text fontSize="lg" lineHeight="1.8" color={useColorModeValue("gray.700", "whiteAlpha.900")}>
              Overall, my experience at{" "}
              <Text as="span" color={useColorModeValue("green.500", "green.300")}>
                Varoon Valley
              </Text>{" "}
              Software House was not only about professional development, but it was also a <strong>personal journey</strong> of learning and discovery, which has prepared me for future technological endeavors.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Experience;
