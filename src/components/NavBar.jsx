import {  
  Box,
  Flex,
  Stack,
  Collapse,
  useColorMode,
  IconButton,
  Text, // Use Text or Heading for your signature
  useOutsideClick,
  useColorModeValue
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import PaddingBox from '../assets/frame/paddingBox';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  const { colorMode, toggleColorMode } = useColorMode(); // Hook to manage color mode
  
  // Reference for detecting clicks outside the collapsible menu
  const menuRef = useRef();
  useOutsideClick({
    ref: menuRef,
    handler: () => setIsOpen(false), // Close menu when clicking outside
  });

  const gradientLight = "linear(to-r, #ff7f50, #ff6347)"
  const gradientDark = "linear(to-r, #4b0082, #800080)"
  // Define signature color based on the color mode
  const signatureColor = useColorModeValue(gradientLight, gradientDark);

  const links = [
    {title: 'Experience', link: '/'},
    {title: 'Education', link:'/education'},
    { title: 'About', link: '/about' },
    {title:'Contact', link: '/contact'},
  ];

  const getlinkColor = (path)=> {
    return location.pathname === path
      ? 'red'
      : colorMode === 'light' ? 'blue' : 'white';
  }

  return (
    <PaddingBox>
      <Box width="100%" borderRadius="0" border="none" m={0} p={0}>
        <Flex
          align="center"
          justify="space-between"
          maxWidth="100vw" // Ensures the navbar width stays within the viewport
          mx="auto" // Centers the navbar content horizontally
        >
          {/* Left side: Signature instead of Logo */}
          <Flex align="center" p={2} flex={{ base: 1, md: "auto" }}>
            <Link to="/" >
              <Text 
                fontSize="2xl" // Adjust font size as needed
                fontWeight="bold" 
                color={signatureColor} // Dynamically set signature color
                fontFamily="Cursive" // You can load a custom font like this
                cursor="pointer"
              >
               Chaw Be Lar
              </Text>
            </Link>
          </Flex> 

          {/* Center: Navigation Links */}
          <Flex justify="center" flex={1} display={{ base: 'none', md: 'flex' }}>
            <Stack direction="row" spacing={10}>
              {links.map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.link} 
                  style={{
                    fontSize: 20,
                    textDecoration: 'none',
                    transition: 'color 0s',
                    color: getlinkColor(link.link),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#FEB2B2";
                    e.currentTarget.style.color = "#F56565";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none';
                    e.currentTarget.style.color = location.pathname === link.link ? '#F56565' : colorMode === 'light' ? 'black' : 'white'; // Revert to active or default color
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Flex>

          {/* Right side: Toggle Color Mode */}
          <Flex align="center" flex={{ base: 1, md: 'auto' }} justify="flex-end">
            <Stack
              direction="row"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {/* Toggle Color Mode Icon */}
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <MdOutlineDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
                border="none"
                onClick={toggleColorMode}
                variant="solid"
                size={"md"}
                _hover={{ bg: 'red.400' }}
              />
            </Stack>

            {/* Hamburger Icon for mobile */}
            <Box
              boxShadow="dark-lg"
              p={1}
              display={{ base: 'flex', md: 'none' }}
              onClick={toggleMenu}
              _hover={{ bgColor: "red.200" }}
              borderRadius="lg"
              bgColor="gray.200"
              cursor="pointer"
              align="center"
            >
              {isOpen ? (
                <IoClose size="24px" color={colorMode === 'light' ? 'black' : 'white'} />
              ) : (
                <GiHamburgerMenu size="24px" color={colorMode === 'light' ? 'black' : 'white'} />
              )}
            </Box>
          </Flex>
        </Flex>

        {/* Collapsible menu for mobile */}
        <Collapse in={isOpen} unmountOnExit>
          <Stack
            ref={menuRef} // Assigning reference for outside click detection
            position="absolute"
            top="65px"
            right={2.5}
            spacing={4}
            p={2}
            display={{ base: 'flex', md: 'none' }}
            align="center"
            maxHeight="300px"
            overflowY="auto"
            
            backgroundColor='rgba(210,190, 93, 100)' // Using RGBA for transparency
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
            borderRadius="5px"
          >
            {links.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.link} 
                style={{
                  fontSize: 20,
                  textDecoration: 'none',
                  fontWeight:"600",
                  transition: 'color 0.5s',
                  color: getlinkColor(link.link),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                  e.currentTarget.style.textDecorationColor = "#FEB2B2";
                  e.currentTarget.style.color = "#F56565";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = 'none';
                  e.currentTarget.style.color = location.pathname === link.link ? '#F56565' : colorMode === 'light' ? 'black' : 'white'; // Revert to active or default color
                }}
              >
                {link.title}
              </Link>
            ))}

            <Box mr={5}>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <MdOutlineDarkMode size="20px" /> : <MdOutlineLightMode size="20px" />}
                onClick={toggleColorMode}
                variant="ghost"
                size="sm"
                _hover={{ bg: 'red.200' }}
              />
            </Box>
          </Stack>
        </Collapse>
      </Box>
    </PaddingBox>
  );
};

export default NavBar;
