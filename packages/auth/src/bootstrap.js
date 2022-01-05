import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';


const mount = (el, { onNavigate, defaultHistory , initialPath}) => {
    console.log(onNavigate,'navigate-auth')
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    ReactDOM.render(<App history={history}/>, el);
    
    if(onNavigate) {
        history.listen(onNavigate);
    }
    return {
        onParentNavigation: ({pathname : nextpathname }) => {
            const { pathname } =  history.location;
            if(pathname !== nextpathname){
                history.push(nextpathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#auth-development-only')
    if(el){
        mount(el, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }