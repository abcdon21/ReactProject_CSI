import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Background from './components/Page1.jsx';
import Last from './components/Last.jsx';
import Features from './components/Features1.jsx';
import Aifeatures from './components/Aifeatures.jsx';
import AINotesLanding from './components/AiNotesLanding.jsx';
import Security from './components/Security.jsx';
import Footer from './Footer.jsx';
import Integration from './components/Integrations.jsx';
import Pricing from './components/Pricing.jsx';
import BlogList from './BlogList.jsx';
import Navbar2 from './Navbar2.jsx';
import Changelog from './Changelog.jsx';

function App() {
    return (          
       <div className="bg-custom-gradient min-h-screen max-w-screen border-double ">
            <Navbar />
            <Background/>
            <Features/>
            <AINotesLanding/>
            <Aifeatures/>
            <Security/>
            <Integration/>
            <Pricing/>
            <Last/>
            <Footer/>
        </div>
    );
}

export default App;


