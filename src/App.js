import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Guard from "./containers/Guard/Guard";
import Navbar from "./components/Navbar/Navbar";

const App = () => (
    <BrowserRouter>
        <Navbar>
            <Route path="/" exact component={Guard} />
        </Navbar>
    </BrowserRouter>
);

export default App;
