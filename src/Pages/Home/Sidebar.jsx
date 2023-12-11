import { NavLink, Outlet } from "react-router-dom";


const Sidebar = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content fixed flex flex-col justify-center items-center space-y-3">
                        {/* Sidebar content here */}
                        <li><NavLink to="/"><a>Home</a></NavLink></li>
                        <li><NavLink to="/about"><a>About</a></NavLink></li>
                        <li><NavLink to="/skills"><a>Skills</a></NavLink></li>
                        <li><NavLink to="/projects"><a>Projects</a></NavLink></li>
                        <li><NavLink to="/contact"><a>Contact</a></NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;