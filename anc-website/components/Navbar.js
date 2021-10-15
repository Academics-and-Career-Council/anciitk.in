import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                <Image src="/anc-logo.png" alt="" width={50} height={50}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="container-fluid navbar-nav d-flex justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Academics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Research</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Int. Relattions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Career Dev.</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Application Portal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resources</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default Navbar