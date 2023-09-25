import React, { Component } from 'react';
import Header from "../components/header";
import Banner from '../components/banner';

class Home extends Component {
    render() { 
        return (
        <div>
           <Header/>
           <Banner/>
        </div>
        )
    }
}
 
export default Home;