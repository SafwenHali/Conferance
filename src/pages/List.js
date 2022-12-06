import React from "react";
import Nav from '../components/Navbar';
import List from '../components/ConfList';
import Footer from '../components/Footer';

const Conf =() => {
    return(
        <div class="bg-indigo-50">
            <Nav/>
            <div class="py-20 px-16 font-semibold text-2xl tracking-tight text-indigo-700">
                Conferances
                <div class="px-8 py-8">
                <List/>
                </div>
            </div>
            <Footer/>
        </div>
    )

}
export default Conf;