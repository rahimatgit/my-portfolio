

const Title = ({heading}) => {
    return (
        <div className="max-w-[350px] mx-auto">
            <h2 className="mt-12 text-3xl md:text-6xl text-center text-green-600 font-bold">{heading}</h2>
            <div className="divider divider-success mb-12 "></div>    
        </div>
    );
};

export default Title;