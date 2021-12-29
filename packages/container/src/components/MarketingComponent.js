import { mount } from 'marketing/MarketingApp';
import React, {useEffect, useRef} from 'react'


export default function MarketingComponent() {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })

    return (
        <div ref={ref}>
            
        </div>
    )
}
