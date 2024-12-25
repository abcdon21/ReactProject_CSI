import React from 'react';
import Navbar from './components/navbar.jsx';
import Background from './components/background.jsx';
import Card from './components/Gradient-Card.jsx'

function App() {
    return (    
        <div className="bg-custom-gradient min-h-screen max-w-screen border-double ">
            <Navbar />
            <Background/>
            <Card/>
        </div>
    );
}

export default App;
