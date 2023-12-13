import Home from '../Home/Home'
import About from '../About/About'
import { Link } from 'react-scroll'
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar fixed bg-base-300 bg-opacity-10">
                        <div className='w-[80%] mx-auto'>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-white">Rahim Monjur</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700}
                                    className='text-white mr-2 '
                                    >Home</Link></li>
                                <li><Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >About</Link></li>
                                <li><Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >Skills</Link></li>
                                <li><Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >Projects</Link></li>
                                <li><Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >Contact</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Home></Home>
                    <About></About>
                    <Skills></Skills>
                    <Projects></Projects>
                    <Contact></Contact>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700}
                                    className='text-white mr-2 '
                                    >Home</Link></li>
                                <li><Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >About</Link></li>
                                <li><Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >Skills</Link></li>
                                <li><Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >Projects</Link></li>
                                <li><Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700} 
                                    className='text-white mr-2'
                                    >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;