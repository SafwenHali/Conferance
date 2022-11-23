import React from "react";
import Nav from '../components/Navbar';
import List from '../components/ConfList';
import Footer from '../components/Footer';

const Conf =() => {
    return(
        <div class="bg-indigo-50">
            <Nav/>
            <div class="py-28 font-semibold text-2xl tracking-tight text-indigo-500">
                Conferances
                <List/>
            </div>
            <Footer/>
        </div>
    )

}
export default Conf;