import { mount } from 'auth/AuthApp';
import React, {useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom';

export default function AuthComponent({onSignIn}) {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
       const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                const { pathname } = history.location;
                if(pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            onSignIn
        });
        if(onParentNavigate){
            history.listen(onParentNavigate);
        }
    },[])

    return (
        <div ref={ref}>
            
        </div>
    )
}
