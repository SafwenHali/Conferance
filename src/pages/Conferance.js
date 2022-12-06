import React from "react";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Conferance'

const Conf =() => {
    return(
        <div class="bg-indigo-50">
            <Nav/>
           <div class=" py-20 font-semibold text-2xl tracking-tight text-indigo-500 flex justify-center items-center">
                <Card/> 
            </div> 
            <Footer/>
        </div>
    )

}
export default Conf;