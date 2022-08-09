import React from "react";
import GhostName from "./ghost-name";
import ghosts from "../ghosts";

export default function Ghosts() {

    function createName(ghosts) {
        return <GhostName key={ghosts.id} name={ghosts.name}/>
    }

    return (
        <div className="container">
                <h2>The Ghost Could be</h2>
            <div className="row">
                <div className="col col-md-4 col-sm-2">
                    <div >{ghosts.map(createName)}</div>                    
                </div>
            </div>
        </div>
    )
}