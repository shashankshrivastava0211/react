const ResaurantCategory=({accordianData})=>{
    
    return(
        <div>
        <div className="w-6/12  bg-gray-50  mx-auto my-4 shadow-lg p-4 flex justify-between">
                <span className="font-bold">{accordianData.title} ({accordianData.itemCards.length})</span>
                <span>test</span>
        </div>
        </div>
        
    )
}
export default ResaurantCategory