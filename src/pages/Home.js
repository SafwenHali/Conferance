import React from "react";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Herosection';

const Home =() => {
    return(
        <div class="bg-indigo-50">
            <Nav/>
            <Hero/>          
             <Footer/> 
        </div>
    )

}
export default Home;