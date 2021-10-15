const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="bootstrap-icons.svg#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi"width={24} height={24}><use xlinkHref="#facebook"></use></svg></a></li>
                </ul>
                <ul className="nav d-flex justify-content-center">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Academics</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Research</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Int. Relations</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Career dev.</a></li>

                </ul>
            </footer>
        </div>
    )
}
export default Footer

