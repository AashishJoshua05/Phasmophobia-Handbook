import React, { useState } from "react";
import Input from "../components/ghost-name-input";

function Home() {




    return (
        <div>
            <h1 className="text-center">Ghosts</h1>
            <div id="main_box">
                <form action="post">
                    <Input type="checkbox"/>
                </form>
            </div>
        </div>
    );
}

export default Home;