import React from 'react';
import { Switch, Route, Router, BrowserRouter} from 'react-router-dom';
import { StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import Signup  from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

const App = ({history}) => {
    return (
        <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                <Route path="/auth/signup" component={Signup} />
                 <Route path="/auth/signin"  component={SignIn} />
                 
                </Switch>
            </Router>
        </StylesProvider>
    </div>
    )
}

export default App;