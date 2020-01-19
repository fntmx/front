import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CLIENT_ROUTES} from "./Routes";
import ArticlesPage from "./Components/Pages/Articles";
import ArticlePage from "./Components/Pages/Article";

function AuthenticationApp(){
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={CLIENT_ROUTES.HOME} component={ArticlesPage}/>
          <Route exact path={CLIENT_ROUTES.ARTICLES} component={ArticlesPage}/>
          <Route exact path={CLIENT_ROUTES.ARTICLE()} component={ArticlePage}/>
        </Switch>
      </BrowserRouter>
  )
}

function App() {
  return (
    <div className="bmwadforth">
      <AuthenticationApp/>
    </div>
  );
}

export default App;
