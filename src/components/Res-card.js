import { LOGO_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
    console.log(props)
    const { name, avgRating, costForTwo, locality, cloudinaryImageId, areaName} = resData?.info;

    return (
        <div className="card m-4 p-4 w-72 shadow-lg rounded-xl bg-white hover:scale-105 transition-transform duration-400">
            <div className="res-image-container rounded-xl overflow-hidden border border-gray-200">
                <img className="res-logo  w-full h-40" src={LOGO_URL + cloudinaryImageId} alt={name} />
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">{avgRating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .592.283l1.878 2.391 3.918.533a.75.75 0 0 1 .416 1.279l-2.859 2.784.676 3.91a.75.75 0 0 1-1.088.791L10 13.347l-3.535 1.864a.75.75 0 0 1-1.088-.791l.676-3.91L.294 6.486a.75.75 0 0 1 .416-1.28l3.918-.533 1.878-2.39A.75.75 0 0 1 10 2zm0 2.445L8.454 5.28a.75.75 0 0 1-.568.284l-2.36.32 1.712 2.186a.75.75 0 0 1 .216.666l-.508 2.939 2.645-1.392a.75.75 0 0 1 .698 0l2.645 1.392-.508-2.939a.75.75 0 0 1 .216-.666l1.712-2.186-2.36-.32a.75.75 0 0 1-.568-.284L10 4.445z" clipRule="evenodd" />
                    </svg>
                </div>
                <p className="text-gray-600 mt-1">{costForTwo}</p>
                <p className="text-gray-600">{locality}, {areaName}</p>
                
                <p className="text-gray-600">Average deliveryTime: {resData?.info?.sla?.deliveryTime} minutes</p>
            </div>
        </div>
    );
};


//higher order component which will take this res card as input and return as enhanced version of it 
//takes input==>res-card
//output==> res-card+label of is open i am not using promoted as its not here

export const withPromotedlabel=(RestrauntCard)=>{
    return (props)=>{
        return(
            <div>
                {/* <label>open</label> */}
                <RestrauntCard {...props} />
            </div>
        )
    }

    
}

export default RestrauntCard;

