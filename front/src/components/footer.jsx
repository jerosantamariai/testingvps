import React from "react";

const Footer = props => {
    return (
        <footer className="navbar-dark bg-dark py-5">
            <ul className="nav justify-content-center">
                <li className="nav-item"><a href="https://getbootstrap.com/docs/5.2/examples/footers/#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="https://getbootstrap.com/docs/5.2/examples/footers/#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="https://getbootstrap.com/docs/5.2/examples/footers/#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="https://getbootstrap.com/docs/5.2/examples/footers/#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="https://getbootstrap.com/docs/5.2/examples/footers/#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <hr className="borderline" />
            <p className="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
    );
}

export default Footer;