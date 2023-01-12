import React from 'react'
import { Helmet } from "react-helmet";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css'


const App=() => {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>GPT3</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Chat GPT Blog" />
            </Helmet>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App