import React from 'react';

import { Button } from "../components/index"
import "./style/index.scss"

const App = () => {
    return (
        <div className="site-main">
            <h1>Hello World !!!</h1>
            <Button className={"thfe-button"} onClick={(e) => { console.log(e.currentTarget); }} value="asd">Button</Button>
        </div>
    );
};

export default App;
