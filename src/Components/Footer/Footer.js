import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../Footer/footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574831158/Logo/BLOGO_k36v5y.png"
            alt="logo"
          />
          <p>
            2020 Bruno DaSilva<span> Front-End Developer</span>
          </p>
          <div className="info-Bruno">
            <p>
              More <span>Projects</span>
            </p>
            <a
              href="https://github.com/DaSilvaBrunoTexa s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>

            <a
              href="https://www.linkedin.com/in/bruno-dasilva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </a>

            <a
              href="http://bruno-dasilva.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
