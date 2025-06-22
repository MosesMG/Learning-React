import { NavLink } from "react-router-dom";

export function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand fw-semibold" to="/">ACCUEIL</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Acceuil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/exemple">Exemple</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/articles">Articles</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
