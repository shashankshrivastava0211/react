const Shimmer = () => {
    return (
        <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {[...Array(9)].map((_, index) => (
                <div key={index} className="shimmer-card rounded-xl overflow-hidden shadow-md bg-white">
                    <div className="animate-pulse bg-gray-300 w-full h-40"></div>
                    <div className="p-4">
                        <div className="animate-pulse bg-gray-300 h-6 w-4/5 mb-4"></div>
                        <div className="animate-pulse bg-gray-300 h-4 w-2/3"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
