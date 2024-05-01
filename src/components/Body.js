import React, { useEffect, useState } from "react";
import RestrauntCard, {withPromotedlabel}from "./Res-card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [reslist, setresObj] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [button, setButton] = useState("Top-rated Restaurants");
    console.log("check in this",reslist)
    const RestaurantCardPromoted=withPromotedlabel(RestrauntCard);//taking a input as Restaurantcard and will returns us restaurantcard withlabel component

    useEffect(() => {
        fetchData();
    }, []); // fetching only with initial render

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        

        setresObj(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // array of restaurants    
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const handleSearch = () => {
        const filteredRestrauntSearch = reslist.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredList(filteredRestrauntSearch);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div className="offline-container">
                <div className="offline-content">
                    <h1 className="offline-heading">You are offline</h1>
                    <p className="offline-message">Please check your network connection</p>
                </div>
            </div>
        );
    };

    return reslist.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body px-6 py-4"> {/* Added padding to the body */}
            <div className="filter items-center justify-between "> {/* Align buttons side by side */}
                <div className="search flex items-center w-full"> {/* Made search bar span full width */}
                    <input
                        type="text"
                        className="border border-solid border-black px-4 py-2 mr-2 rounded w-full"
                        placeholder="Search Restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <button
                        className="text-white px-4 py-2 rounded-3xl bg-orange-400 hover:bg-orange-600" // Changed color to orange
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="mt-4">
                    <button
                        className="filter-btn bg-orange-400 text-white px-4 py-2 hover:bg-orange-600 rounded-xl" // Changed color to orange
                        onClick={() => {
                            if (button === "Top-rated Restaurants") {
                                const FilterresObj = reslist.filter((res) => res.info.avgRating >= 4.4);
                                setFilteredList(FilterresObj);
                                setButton("Home");
                            } else {
                                setFilteredList(reslist); // Reset to original list
                                setButton("Top-rated Restaurants");
                            }
                        }}
                    >
                        {button}
                    </button>
                </div>

            </div>
            <div className="res-container flex flex-wrap">
                {filteredList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="restaurant-link">

                    
                        {
                            restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant}/> :<RestrauntCard resData={restaurant} />
                        }
                        
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
