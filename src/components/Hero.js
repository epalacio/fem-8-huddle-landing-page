import logo from '../img/logo.svg';
import mockups from '../img/illustration-mockups.svg'

const Hero = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="Text bubble in pink plus word Huddle"/>
                <button>Try it Free</button>
            </div>
            <div>
                <div>
                    <h2 className="">Build The Community Your Fans Will Love</h2>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                </div>
                <img src={mockups} alt="Desktop and mobile mockups, no text"/>
            </div>
        </div>
    );
}
 
export default Hero;