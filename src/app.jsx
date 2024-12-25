import React from 'react';
import Navbar from '.Navbar2.jsx';
import Background from './components/background.jsx';
import Card from './components/Gradient-Card.jsx'
import BlogList from './BlogList.jsx';
import Footer from './Footer.jsx';

function App() {
    return (    
        <div className="bg-custom-gradient min-h-screen max-w-screen border-double ">
            <Navbar />
            <Background/>
            <Card/>
            {/* <BlogList/> */}
            <Footer/>
           
        </div>
    );
}

export default App;


