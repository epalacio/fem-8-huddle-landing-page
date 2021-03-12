import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";

import logo from '../img/logo.svg';
import mockups from '../img/illustration-mockups.svg'

const Hero = () => {
    return (
        <Router>
        <div className="bg-contain bg-hero-mobile sm:bg-hero-desktop p-4">
            <div className="flex justify-between items-center">
                <img className="max-h-4" src={logo} alt="Text bubble in pink plus word Huddle"/>
                <Link className="rounded-full bg-white px-8 py-4 text-xs shadow-md text-center" to='/'>Try It Free</Link>
            </div>
            <div className="my-20 px-5 text-center grid gap-8 sm:grid-cols-2">
                <div>
                    <h2 className="font-bold text-xl ">Build The Community Your Fans Will Love</h2>
                    <p className="text-sm py-6">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <Link className="text-white rounded-full bg-pinkEsp px-12 py-2 text-xs shadow-md" to='/'>Get Started For Free</Link>
                </div>
                <img  className="max-h-50 m-auto" src={mockups} alt="Desktop and mobile mockups, no text"/>
            </div>
        </div>
        </Router>
    );
}   
 
export default Hero;