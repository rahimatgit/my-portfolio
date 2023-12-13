import image from '../../assets/rahim.png'


const Home = () => {
    return (
        <div id="home" className="min-h-screen w-[80%] mx-auto flex justify-center items-center ">
            <div className='flex-1 space-y-4'>
                <h2 className='text-3xl md:text-6xl font-bold text-white'>RAHIM MONJUR</h2>
                <h4 className='text-2xl md:text-4xl font-bold text-green-600'>Frontend Developer</h4>
            </div>
            <div className='flex-1 '>
                <img src={image} className=' h-[500px] ' alt="" />
                
            </div>
        </div>
    );
};

export default Home;