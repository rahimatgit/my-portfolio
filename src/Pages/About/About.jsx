import Title from "../../Shared/Title";
import image from '../../assets/rahim.png';

const About = () => {
    return (
        <div id="about" className=" ">
            <Title heading="About Me"></Title>
            
            <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 shadow-xl ">
                <figure className=""><img src={image} className="h-[300px] w-[250px] rounded-full" alt="Album" /></figure>
                <div className="flex-1">
                    <p className="text-white text-xl font-medium">Hello! I am Rahim, a passionate frontend developer with a focus on creating seamless and engaging user experiences. Armed with expertise in React, Tailwind CSS, and MongoDB, I bring ideas to life by crafting intuitive and responsive web applications. I thrive on turning design concepts into functional and visually appealing interfaces, always pushing the boundaries of what is possible in the digital realm. With a keen eye for detail and a love for clean code, I am dedicated to delivering high-quality solutions that not only meet but exceed user expectations. When I'm not coding, you will likely find me exploring new technologies, refining my skills, or enjoying the latest trends in web development. Let's build something amazing together!</p>
                    <div className="divider divider-success"></div>
                </div>
            </div>
        </div>
    );
};

export default About;