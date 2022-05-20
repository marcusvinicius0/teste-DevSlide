import './footer.css';

import logoLibSlide from '../../assets/logoLibSlide.svg';
import facebookLogo from '../../assets/facebookLogo.svg';
import twitterLogo from '../../assets/twitterLogo.svg';
import instagramLogo from '../../assets/instagramLogo.svg';

export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <img className="logo-footer" src={logoLibSlide} alt="logoLibSlide" />
                <div className="footer-line" />

                <nav>
                    <ul>
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </nav>


                <div className="socialMedia-links">
                    <a href="https://www.facebook.com/slideworks.cc/" target="_blank" rel="noreferrer"><img src={facebookLogo} alt="facebook" /></a>
                    <a href="/"><img src={twitterLogo} alt="twitter" /></a>
                    <a href="https://www.instagram.com/slideworks.cc/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="instagram" /></a>
                </div>
            </div>
        </footer>
    )
}

