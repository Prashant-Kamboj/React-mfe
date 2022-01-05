import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    console.log(onNavigate,'navigate-marketing')
    let history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate)
    }
    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate({pathname: nextPathname}){
            const { pathname } = history.location;
            if(pathname !== nextPathname){
                history.push(nextPathname);
            }
        }
    };
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#marketing-only-development');
    if(el){
        mount(el,{defaultHistory: createBrowserHistory()});
    }
}

export { mount }