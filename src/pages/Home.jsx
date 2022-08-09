import React from "react";
import Evidences from "../components/evidences";
import Ghosts from "../components/ghosts";

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-4 col-sm-2" id="evidences">
                    <Evidences />                
                </div>
                <div className="col-lg-6 col-md-4 col-sm-2" id="ghosts">
                    <Ghosts />
                </div>
            </div>
        </div>
    );
}

export default Home;