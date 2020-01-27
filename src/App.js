import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CLIENT_ROUTES} from "./Routes";
import ArticlesPage from "./Components/Pages/Articles";
import ArticlePage from "./Components/Pages/Article";
import Navigation from "./Components/Navigation";
import ProjectsPage from "./Components/Pages/Projects";

function AuthenticationApp() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path={CLIENT_ROUTES.HOME} component={ArticlesPage}/>
                <Route exact path={CLIENT_ROUTES.ARTICLES} component={ArticlesPage}/>
                <Route exact path={CLIENT_ROUTES.ARTICLE()} component={ArticlePage}/>
                <Route exact path={CLIENT_ROUTES.PROJECTS} component={ProjectsPage}/>
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
