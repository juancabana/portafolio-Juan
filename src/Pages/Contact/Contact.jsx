import React, { Component } from "react";
import ContentContact from './../../components/ContentContact/ContentContact';
import Footer from './../../components/Footer/Footer';
import Back from "../../components/Back/Back";

class Contact extends Component{
    render(){
        return(
            <div className="Contact">
                <Back/>
                <ContentContact/>
                <Footer/>
            </div>
        );
    }

}

export default Contact;