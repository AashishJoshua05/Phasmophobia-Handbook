import React  from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">PhasmoHandbook</a>
                <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link me-2" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-2" href="/maps">Maps</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-2" href="/cursedobjects">Cursed Objects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-2" href="/voicelines">Voice Lines</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


