import { Box } from "@chakra-ui/layout";
import { Sidebar } from "./sidebar";

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="250px">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {" "}
        {children}{" "}
      </Box>
      <Box position="absolute" bottom="0" left="0">
        Player
      </Box>
    </Box>
  );
};
