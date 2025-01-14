import React from "react";
import Navbar from "./Component/Navbar";
import Dashboard from "./Component/Dashboard";
import OurStory from "./Component/OurStory";
import FormandInfo from "./Component/FormandInfo";
import Properties from "./Component/Properties/Properties";
import Footer from "./Component/Footer/Footer";
import "./App.css"
const App = () => {
  return (
    <>
      <div className="body_container">
        <Navbar />
        <Dashboard />
        <FormandInfo />
        <OurStory />
        <Properties />
      </div>
      <Footer />
    </>
  )
}
export default App;