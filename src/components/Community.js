import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";

const Community = () => {
    return (
        <Router>
        <div className="rounded-lg shadow-lg text-center mx-3 lg:mx-40 xl:mx-72 py-12 relative bg-white -mb-10">
            <h3 className="text-base pb-8 text-darkCyan">Ready To Build Your Community?</h3>
            <Link className="text-white rounded-full bg-pinkEsp px-12 py-2 text-xs shadow-md" to='/'>Get Started For Free</Link>
        </div>
        </Router>
    );
}
 
export default Community;