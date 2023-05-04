import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skils/Skills";
import MyWorks from "./MyWorks/MyWorks";
import RemoteWork from "./remoteWork/RemoteWork";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
        </div>
    );
}

export default App;
