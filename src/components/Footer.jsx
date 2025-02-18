import React from 'react'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sections">
                <p>
                    <i className="far fa-copyright fa-md"></i> 2025
                </p>
                <p>Website Created by:</p>
                <a href="https://www.linkedin.com/in/ashoffmann90/">
                    <p>Andrew Hoffmann</p>
                </a>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ashoffmann90/">
                        <div className="soc-icon">
                            <img
                                src="https://nick-portfolio.s3-us-west-2.amazonaws.com/iconfinder_Rounded_Linkedin2_svg_5282542.png"
                                alt="LinkedIn profile for Andrew Hoffmann"
                            />
                        </div>
                    </a>
                    <a href="https://github.com/ashoffmann90">
                        <div className="soc-icon">
                            <img
                                src="https://nick-portfolio.s3-us-west-2.amazonaws.com/iconfinder_Group_4747499.png"
                                alt="GitHub profile for Andrew Hoffmann"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
