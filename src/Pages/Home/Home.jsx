import image from '../../assets/rahim.png';
import resume from '../../assets/Resume of Rahim Monjur.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    return (
        <div id="home" className="min-h-screen w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-6">
            <div className='flex-1 space-y-4'>
                <h2 className='text-3xl md:text-6xl font-bold text-white'>RAHIM MONJUR</h2>
                <h4 className='text-2xl md:text-4xl font-bold text-green-600'>Frontend Developer</h4>
                <p className='text-white text-xl font-medium'>I am a passionate Frontend developer with a mission to create delightful and intuitive digital experiences. With a strong foundation in development principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                <div className="divider divider-success"></div>
                <a
                    href={resume}
                    download={"Rahim Monjur's Resume.pdf"}

                >
                    <button className=" text-white mt-5 btn btn-success">
                        Download Resume
                    </button>
                </a>
            </div>
            <div className='' >
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" src={image} className=' h-[400px] md:h-[500px] rounded-full' alt="" />

            </div>
        </div>
    );
};

export default Home;