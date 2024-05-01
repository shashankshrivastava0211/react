import React,{lazy,Suspense} from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.JS";
import Grocery from "./components/Grocery";//we will not load our page for grocery we will load our page of grocery only when grocery is clicked on we go on that page  it is known as lazyLoading and ondeamnd loading 

 // chunking 
 // lazy  loading 
 //dynamic  import 
 //on demand loading 
// dynamic bundeling 


const grocery =lazy(()=>{
    import("./components/Grocery")
});
//this lazy accepts a call back function and a import which will hold the path of grocery and will only import it when required 



const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            {/**if my path is /about then it should have about component if / contact contact should be here than contact and same for body */}
            {/* <Body /> */} 
            {/* <Outlet /> component wherever there will be change in path this wiull get filled with th children path  */}
            <Outlet />

        </div>
    )
}

const appRouter=createBrowserRouter([//config takes list each and every object defines a path and what should happen in that path is hit
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading</h1>}>
                
                <Grocery />
                </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />

            }

        ],
        errorElement:<Error />
    }
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)