import React,{useState} from 'react';
import {render} from "react-dom";
import Searchparams  from './Searchparams';
import { Router, Link } from '@reach/router';
import Details from './Details';
import ThemeContext from './themeContext';
const App = () =>{

    const themeHook = useState("darkblue")
    return(
        <React.StrictMode>

            <ThemeContext.Provider value={themeHook}/>
        <div>

            <header>
                <Link to='/'>
                    Adopt Me!
                </Link>

            </header>
            <Router>
                <Searchparams path="/"/>
                <Details path="/details/:id"/>

            </Router>
            

        </div>
        <ThemeContext.Provider/>
        </React.StrictMode>
    )

};

render(<App/>, document.getElementById("root"))