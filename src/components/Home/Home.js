import React from 'react';
import Welcome from "../Welcome/Welcome";
import Menu from "../Menu/Menu";
import { getOperatorName } from "../../data/helper";

const Home = () => {
    return (
        <div className="Home">
            <Welcome name={getOperatorName} />
            <Menu />
        </div>
    );
}

export default Home;