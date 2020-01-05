import React from 'react';
import ArticlesPage from "./Components/Pages/Articles";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from "./Components/Navigation";
import {CLIENT_ROUTES} from "./Routes";
import ProjectsPage from "./Components/Pages/Projects";
import AdminPage from "./Components/Pages/Admin";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import ArticlePage from "./Components/Pages/Article";

const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffc107'
            },
            secondary: {
                main: '#343a40'
            }
        }
    },
);

function App() {
    return (
        <div className="bmwadforth">
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path={CLIENT_ROUTES.HOME} component={ArticlesPage} />
                        <Route path={CLIENT_ROUTES.ARTICLES} component={ArticlesPage} />
                        <Route path={CLIENT_ROUTES.ARTICLE()} component={ArticlePage} />
                        <Route path={CLIENT_ROUTES.PROJECTS} component={ProjectsPage} />
                        <Route path={CLIENT_ROUTES.ADMIN} component={AdminPage} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
