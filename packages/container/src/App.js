import React,{lazy, Suspense, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";

const AuthLazy = lazy(() => import('./components/AuthComponent'));
const MarketingLazy = lazy(() => import('./components/MarketingComponent'));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default function App() {

  const [isSignedIn, setisSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
        <Header isSignedIn={isSignedIn} onSignOut={() => setisSignedIn(false)}/>
          <Suspense fallback={<Progress />}>
          <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setisSignedIn(true)}/>
              </Route>
              <Route path='/' component={MarketingLazy} />
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
