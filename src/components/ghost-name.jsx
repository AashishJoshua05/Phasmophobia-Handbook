import React from "react";

function GhostName(props) {
    
    function onMouseHoverOn(e) {
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    function onMouseHoverOff(e) {
        e.target.style.background = '#1e1e1e';
        e.target.style.color = 'white';
    }
    
    return (
        <div className="ghost-name" onMouseOver={onMouseHoverOn} onMouseOut={onMouseHoverOff} >{props.name}</div>
        );
}

export default GhostName;