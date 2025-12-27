function Footer(){
    return(
        <footer className="bg-dark text-light py-4 mt-5">
                <div className="container text-center">
                    <div className="mb-3">
                        <p>
                            <i className="bi bi-code-slash text-info me-2"></i>
                            Developped By: 
                        </p>
                        <h4 className="fw-bold">Hamza Makouar</h4>
                    </div>
                    <hr className="border-secondary"></hr>
                    <div>
                        <h5 className="mb-2">
                            <i className="bi bi-envelope-fill text-warning me-2"></i>
                            Contact Us
                        </h5>
                        <a href="mailto:hamzamekoire@gmail.com"
                            className="text-decoration-none text-light"
                        >
                            <i className="bi bi-send-fill me-2 text-primary"></i>
                            hamzamekoire@gmail.com

                        </a>
            
                    </div>
                    <div className="mt-3">
                        <a
                            href="https://linkedin.com"
                            className="text-light me-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-linkedin fs-4"></i>

                        </a>
                        <a
                            href="https://github.com/makouarhamza"
                            className="text-light me-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-github fs-4"></i>
                        </a>

                        <a
                            href="https://facebook.com"
                            className="text-light me-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                    </div>

                    <p className="mt-3 text-secondary small mb-0">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </footer>
    )

}
export default Footer