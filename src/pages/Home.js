import React from "react";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Home =() => {
    return(
        <div class="bg-indigo-200">
            <Nav/>
            <div class="font-semibold text-2xl tracking-tight text-indigo-500 py-28 ">
                Welcome to We Conference    
            </div>            
             <Footer/> 
        </div>
    )

}
export default Home;