import location from '../img/icon-location.svg'
import phone from '../img/icon-phone.svg'
import email from '../img/icon-email.svg'



import logo2 from '../img/logo2.svg';

const Footer = () => {
    return (
        <div className="text-white bg-darkCyan pt-20 px-4 ">
            <div>
                <img className="mb-6" src={logo2} alt=""/>
                 <div className="flex items-baseline mb-4">
                    <img className="" src={location} alt=""/>
                    <p className="pl-6 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                 <div className="flex items-baseline mb-4">
                    <img src={phone} alt=""/>
                    <p className="pl-6">+1-543-123-4567</p>
                </div>
                 <div className="flex items-baseline mb-4">
                    <img src={email} alt=""/>
                    <p className="pl-6">example@huddle.com</p>
                </div>

            </div>
            <div className="grid grid-cols-1 gap-6 my-8 text-sm">
                <ul className="grid grid-cols-1 gap-6">
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul className="grid grid-cols-1 gap-6">
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="text-center text-sm">
                <ul className="grid grid-cols-3 text-center justify-items-center mb-4 mx-12">
                    <li className="border-white border-2 p-2 rounded-full w-12 h-12 text-center"><i className="pt-2 fab fa-facebook-f"></i></li>
                    <li className="border-white border-2 p-2 rounded-full w-12 h-12 text-center"><i className="pt-2 fab fa-twitter"></i></li>
                    <li className="border-white border-2 p-2 rounded-full w-12 h-12 text-center"><i className="pt-2 fab fa-instagram"></i></li>
                </ul>
                <p className="text-sm pb-8">&copy; Copyright 2021 Huddle. All rights reserved.</p>
            </div>
        </div>
    );
}
 
export default Footer;