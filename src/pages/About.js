import React from "react";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const About =() => {
    return(
        <div class="bg-indigo-50">
            <Nav/>
           <div class="py-20 px-16 font-semibold text-2xl tracking-tight text-indigo-700">
             About
            </div> 
            <Footer/>
        </div>
    )

}
export default About;