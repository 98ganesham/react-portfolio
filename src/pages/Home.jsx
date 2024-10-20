import { Outlet } from "react-router-dom"
import {Flex, Box} from "@chakra-ui/react"
import NavBar from "../components/NavBar"

const Home = ()=>{
    return (
       <Flex minH="100vh">
        <NavBar />

        <Box overflow={"hidden"} flex="1" maxH="120vh">
            <Outlet />
        </Box>
       </Flex>
    )
}

export default Home;