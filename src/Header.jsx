

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Chicken Tender</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#">Find love</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Matches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Messages</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-secondary my-2 my-sm-0" type="button">My Profile</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
        ;
}