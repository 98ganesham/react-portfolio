import { Box } from "@chakra-ui/react"

const PaddingBox = ({ children }) => {
  return (
    <Box px={[4, 8, 16]} py={[4, 8, 8]} >
      {children}
    </Box>
  );
};

export default PaddingBox;
