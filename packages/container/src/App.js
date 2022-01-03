import React from 'react';
import MarketingComponent from './components/MarketingComponent';

export default function App() {
    console.log('hello from container')
    return (
        <div>
            Hello from container
            <MarketingComponent />
        </div>
    )
}
