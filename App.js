import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Home from './Homepage';


function App() {
    return (
        <div className="page-container">
            <NavBar />

            <Home />
        </div>
    );
}

export default App;