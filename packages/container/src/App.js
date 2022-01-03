import React from 'react';
import MarketingComponent from './components/MarketingComponent';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
    console.log('hello from container')
    return (
        <BrowserRouter>
        <div>
            Hello from container for development !!!!!
            <Header />
            <MarketingComponent />
        </div>
        </BrowserRouter>
        
    )
}
