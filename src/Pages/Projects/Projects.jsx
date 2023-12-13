import Title from "../../Shared/Title";
import image1 from "../../assets/eduventspro.png";
import image2 from "../../assets/elitefashion.png";
import image3 from "../../assets/assignmate.png";

const Projects = () => {
    return (
        <div id="projects">
            <Title heading="Projects"></Title>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-[80%] mx-auto mt-12 flex flex-col md:flex-row md:items-center gap-6 lg:card-side shadow-xl">
                <figure className="w-full md:w-[60%]"><img src={image1} alt="Album" /></figure>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-bold text-green-600">EduVentsPro</h2>
                    <p className="text-white my-3">An educational event management website.</p>
                    <a className="text-green-400" href="https://assignment-9-event-manag-16334.web.app/" target="_blank">Site Link</a>
                    <p className="text-white">Key Features: <br />
                        1. Authentication system with email password and gmail <br />
                        2. Password validation <br />
                        3. Private and protected routes <br />
                        4. AOS animation in home page <br />
                        5. Detail information for the whole management in about us, my team and services section. <br />
                        6. Can't proceed without log in</p> <br />
                    <div className="divider divider-success"></div>
                </div>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-[80%] mx-auto mt-12 flex flex-col md:flex-row md:items-center gap-6 lg:card-side shadow-xl">
                <figure className="w-full md:w-[60%]"><img src={image2} alt="Album" /></figure>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-bold text-green-600">Elite Fashion</h2>
                    <p className="text-white my-3">A lifestyle brand website.</p>
                    <a className="text-green-400" href="https://assignment-10-brandshop-client.web.app/" target="_blank">Site Link</a>
                    <p className="text-white">Key Features: <br />
                        1. It is a fashion based website. Mainly for user and admin. <br />
                        2. Admins can create data and update data after logging in. <br />
                        3. User can select products after logging in. <br />
                        4. User can delete their data from my carts section. <br />
                        5. User can change website theme in light and dark themes <br />
                        </p> <br />
                    <div className="divider divider-success"></div>
                </div>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="w-[80%] mx-auto mt-12 flex flex-col md:flex-row md:items-center gap-6 lg:card-side shadow-xl">
                <figure className="w-full md:w-[60%]"><img src={image3} alt="Album" /></figure>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-bold text-green-600">Assignmate</h2>
                    <p className="text-white my-3">An online educational website.</p>
                    <a className="text-green-400" href="https://assignment-11-group-study.web.app/" target="_blank">Site Link</a>
                    <p className="text-white">Key Features: <br />
                        1. Users can create assignment from Create Assignment page <br />
                        2. Any user can participate on any assignment from Assignments page <br />
                        3. Only the user who had created a specific assignment can update or delete it <br />
                        4. Any user can give marks to other user's assignments from Submitted Assignments page <br />
                        5. One user can see his/her assignment records and marks from My Assignment page <br />
                        6. Without logging in, no user can access these services</p> <br />
                    <div className="divider divider-success"></div>
                </div>
            </div>
        </div>
    );
};

export default Projects;