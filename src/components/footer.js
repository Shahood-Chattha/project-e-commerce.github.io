import React from "react";


class Footer extends React.Component {
    render() {
      return (
        <footer className="bg-dark  text-center text-white text-lg-start ">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">About Us</h5>

                    <p>
                    At  Ecommerce, we believe that shopping should be an enjoyable and hassle-free experience.
                     That's why we're committed to providing our customers with the highest quality products at affordable prices,
                      backed by exceptional customer service. Our team is made up of experienced ecommerce professionals who are passionate about what we do,
                       and we're constantly striving to improve and innovate. Whether you're looking for the latest fashion trends or the best deals on electronics,
                        we've got you covered. Thank you for choosing Ecommerce - we look forward to serving you!
                    </p>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-inline mb-0">
                        <li className="list-inline-item me-4">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f text-white"></i>
                            <span className="ms-2 text-white">Facebook</span>
                            </a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter text-white"></i>
                            <span className="ms-2 text-white">Twitter</span>
                            </a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram text-white"></i>
                            <span className="ms-2 text-white">Instagram</span>
                            </a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in text-white"></i>
                            <span className="ms-2 text-white">LinkedIn</span>
                            </a>
                        </li>
                        </ul>

                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Contact</h5>

                    <ul className="list-unstyled mb-0">
                        <li className="mb-3"><i className="fas fa-map-marker-alt me-2"></i>123 Main St, City, State Zip</li>
                        <li className="mb-3"><i className="fas fa-phone-alt me-2"></i>(123) 456-7890</li>
                        <li className="mb-3"><i className="fas fa-envelope me-2"></i>info@ecommerce.com</li>
                        <li className="mb-3"><i className="fas fa-clock me-2"></i>Mon - Fri: 9am - 5pm, Sat - Sun: Closed</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="text-center p-3">
                &copy; 2021 Your Company Name
            </div>
            </footer>
      )
    }
}

export default Footer;