import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App (){
    return (
        
        <Router >
<Box>
    <NavBar />
    <Routes >
        <Route path='/' element={<About/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact/>}/>
        
    </Routes>
</Box>
        </Router>
        
    )
}

export default App;