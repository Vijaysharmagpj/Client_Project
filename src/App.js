import React from "react";
import Navbar from "./Component/Navbar";
import Dashboard from "./Component/Dashboard";
import OurStory from "./Component/OurStory";
import FormandInfo from "./Component/FormandInfo";
const App=()=>{
  return(
    <>
    <Navbar/>
    <Dashboard/>
    <FormandInfo/>
    <OurStory/>
    </>
  )
}
export default App;