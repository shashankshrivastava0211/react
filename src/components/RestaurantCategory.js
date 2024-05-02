import AccordianList from "./AccordianList"

const ResaurantCategory=({accordianData})=>{
    const handleClick =()=>{
        

    }
    return(
        <div>
        <div className="w-6/12  bg-gray-50  mx-auto my-4 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{accordianData.title} ({accordianData.itemCards.length})</span>
                <span className="text-center">⬇️</span>
            </div>
            <AccordianList  items={accordianData.itemCards}/>
        </div>
        
       
        </div>
        
    )
}
export default ResaurantCategory