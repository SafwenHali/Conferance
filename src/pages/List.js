import React from "react";
import Nav from '../components/Navbar';
import List from '../components/ConfList';
import Footer from '../components/Footer';

const Conf =() => {
    return(
        <div>
            <Nav/>
            Conferance
            <List/>
            {/* <Footer/> */}
        </div>
    )

}
export default Conf;