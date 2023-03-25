import React, {useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import { Context } from '../context/Context';
import Url from './Url';
import Texto from './Texto';
import Email from './Email'
import Navbar from '../Components/Navbar'

const Home = () => {

    const {tema} = useContext(Context);

    const bodyStyle = {
        backgroundColor: tema === 'claro' ? '#fff' : '#0a1929',
        color: tema === 'claro' ? '#333' : '#fff'
    }

    return (
        <Router>
            <div style={bodyStyle}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Url/>}/>
                <Route path='/texto' element={<Texto/>}/>
                <Route path='/email' element={<Email/>}/>
            </Routes>
            <Footer/>
            </div>
        </Router>
    );
}

export default Home;
