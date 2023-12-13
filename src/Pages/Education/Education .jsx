import Title from "../../Shared/Title";


const Education = () => {
    return (
        <div id="education" className="w-[80%] mx-auto">
            <Title heading="Education"></Title>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic text-white">2023</time>
                        <div className="text-lg font-black text-white">BSc Honours Graduation</div>
                        <p className="text-xl font-bold text-green-600">CGPA 3.49</p>
                        <p className="text-white">Computer Science and Engineering</p>
                        <p className="text-white">BGC Trust University Bangladesh</p>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic text-white">2018</time>
                        <div className="text-lg font-black text-white">HSC Examination</div>
                        <p className="text-xl font-bold text-green-600">GPA 4.33</p>
                        <p className="text-white">Hajera Taju University College</p>
                        <p className="text-white">Chattogram, Bangladesh</p>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic text-white">2016</time>
                        <div className="text-lg font-black text-white">SSC Examination</div>
                        <p className="text-xl font-bold text-green-600">GPA 5.00</p>
                        <p className="text-white">Chittagong Govt High School</p>
                        <p className="text-white">Chattogram, Bangladesh</p>
                    </div>
                    <hr />
                </li>
                
            </ul>
        </div>
    );
};

export default Education;