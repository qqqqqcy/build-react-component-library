import React from 'react';

import { Button } from "../components/index"

const App = () => {
    return (
        <div className="App height-100">
            <h1>Hello World !!!</h1>
            <Button className={"thfe-button"} onClick={(e) => { console.log(e.currentTarget); }} value="asd">Button</Button>
        </div>
    );
};

export default App;
