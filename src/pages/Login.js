import React from "react";
import Nav from '../components/Navbar';
import Log from '../components/Login';
import Footer from '../components/Footer';

const Login =() => {
    return(
        <div class="bg-indigo-50">
            <Nav/>
            <div class="pb-28">
            <Log/>
            </div>
            <Footer/>
        </div>
    )

}
export default Login;