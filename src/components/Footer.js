import location from '../img/icon-location.svg'
import phone from '../img/icon-phone.svg'
import email from '../img/icon-email.svg'



import logo2 from '../img/logo2.svg';

const Footer = () => {
    return (
        <div>
            <div>
                <img src={logo2} alt=""/>
                <div>
                    <img src={location} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div>
                    <img src={phone} alt=""/>
                    <p>+1-543-123-4567</p>
                </div>
                <div>
                    <img src={email} alt=""/>
                    <p>example@huddle.com</p>
                </div>

            </div>
            <div>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                </ul>
                <p>&copy; Copyright 2021 Huddle. All rights reserved.</p>
            </div>
        </div>
    );
}
 
export default Footer;