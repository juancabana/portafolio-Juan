import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ContentHome  from "../../components/ContentHome/ContentHome";
import Footer from "../../components/Footer/Footer";
import About from "../About/About"
import './Home.css';


class Home extends Component {
  render() {
    return(
        <div className="Home">
            <Header/>
            <ContentHome/>
            <About/>
            <Footer/>

        </div>
    );
  }
}

export default Home;