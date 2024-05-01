npm i
npm init 
npm install parcel
change sript
npm install react 
npm install react-dom 
npm install react-router-dom   ==>insall router library for routing latest version-6

................routes......................
react-router dom imports 
import useRouteError
import { create browser router,outlet ,routerprovider}
import link to actiually link
import useParams to extract id in order to navigate to each section of restaurant by changing its id in url 
.................routes...............................
parcel--bundler
dev build
cashe 
works on file watching algorithm
minification 
bundle
HMR-hot module  replacement
differential bundeling - support older browsers
diagnostics
better error suggeestion 
gives a way to host on https
tree shaking (imp)==> remove unused code for you if theres some code which u are not using 
different build for dev and producton 
also manages and transpile jsx code 
it is done by babel which cov=nvert jsx to js so that it can be renderes by browser react ans js ingine can read it 


steps of creating 
change start and builld in scripts in npm json.to start a project read scripts 

JSX is not html in js its look like this but is different from XML also


react component ==> everythng is a component in React

//classbased Component andsecond type are function 

classway is old way 
functon based is new 99.99 projects are used way more 
//react component is just a normal JS functional  
component composition is component inside component 


props are passsed just as argumnent and can be transferred dynamicaly in a component


each child should have a unique key 

//react element
// const heading=React.createElement("h1",{id:"heading"},"hello this is shashank");//react element which is object and when rendered it is rendered as html   
// const root =ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//jsx
// const jsxheading=<h1 id="heading" className="header"> Namestey react JSX
// </h1>


//jsx==> react element ==>object==>html //babel is coverting  

//root.render(jsxheading)//JSX IS HTML LIKE SYNTAX NOT HTML IN JS


//[q] is this a valid a js?
//ans js engine can't understand jsx also browsers cant understnad then how can its be renders this is because parcel converts or transpile this and covert it  


make page interactive now by clicking on search we'll select top rated restraunts

react s fast as it manupulates UI


right now list of object is normal variablw so lets give a power to becme a react variable so that chsanging it can reflect on ui it is known as state variable

react hooks are normal js functionms -written by fb developers 
-useStae()-generate superpowerful state variables 
-useeffect()


react uses reconsilation algo ,it is also known as react fibre
virtual dom is a representation of dom but is not actual dom it is basically js objects which are nested for eg if actual dom has <div>
                                <div></div>
                    </div> virtual dom will be {
                        div{

                        }
                    }basically nested obj 

diff algorithm tries to find difference between each render cycle and based on it it updates ui in react 16 new algorithm came in namely Reconcillation 

console props must  

.........................> swiggy data on this app done<...................
now we want to show loader until this ui configs
so for this logivc if my restList is empty i will show this loader
we will use shimmer UI -it IS A FAKE PAGE UNTIL WE GET the data from API just a fake page or fake cards



it triggers reconsillation cycle after useState is reached 

imp question how can const variable is modifying itself in useState ans=>
this is because when it happens it renders the components again and this time with updated value now reconcilling algorithm checks return(<div></div> of components and agar kuch vhsnge hai toh vo usko change kardega like agar usme bus button change hai toh button change ho jayega)




most imp till now............................................>search box bug<.................................................

if i search for 1 res and it gave me result efficiently dusri br krne pr nhi dega kyu?
kyiki jb phli br search kia resList update ho gyi result se ab refresh toh kia nhi wps search krdia usse list m abi 2 hi restaurant the unme vo data nhi mila jo search kara toh kuch b nhi aaya 
isko fix kese kara ?

.....ANS...
isko solve krne k liye reslist ko wsa hi rehnedia (intact) taaki filter usse ho aur ek filter state variable bna dia jo ui pr display krega initially uske ps sb kuch hoga jo api se aake resList m daala hai aage chlke vo sb vo show krega jo search hua h qki ham display filter list krayenge hamesha or resList ko intact rkhnge
esa karne se ek br search kara toh reslist.filter lga jo aaya usey set krke hamne ui pr daaldia hamesha ui update kro nye state variable se or jisse data aara usey intact rkho search filter wgerah k liye 


...enter khudse daalne k liye ek const hi bna dia handle search naam se call back functuon 
handlesearch ()=>{
   const filtered= reslist.filterres=(res)=>res.info.name.includes(searchText)
   setfilteredRestaruant(filtered)//ui ye update krdega as yei ui k liye responsible hai 


   ab input box k andar if on change event lga dia (e)
}
..............................................................................................................
................................................ROUTING.......................................................

before routing lets dive deep in useEffecrt 
useeffect =(()=>{
    console.log("useEffect called)
},[]);--take two argument 1 call back function and 1 dependency array 
dependency array change its behaviour as its not mandaotry if we use useEffect without dependency array than use effect call on every render irrespective of component 
tip-1 never use use state inside if else condition 
tip 2 always declare use state variables on top they will always be on top of body component inside body but top of everything else now kerrs mive to the routunhg section first use routingh library 
then import {create router browser from react router dom}

now set config in app layout but to give it accessible to app we have to import router provider also with router browser use imported that also now this component is getting render with all the configs of browser insead of hardcoding app layout to render at last line of App.js refer React Router documentation

we can also load error componet refer app.js error it has a hook of useRoute error this will return us a object abouta error to imporve develooper expireince 



.........................................childrenRoutes..............................................



crieated a key children which will take array of all the children now to define which component to come after body we will decide if / about then abour sshould come there other w=wuse for /contact cibtact sgiyd comde there and for /nothing body shgoyd compoinenent should come there todo this we have used outlet here 
and according to route outlet will take it this will not reflect in html react will pick it move it inplace of about 
we can also reuse headder and we are loadingh this page according to outlet 


.................now lets link it ..............


one way is to create anchor page for each about contact us and home but never use it for routing because it will refresh whole page but theres a magic in react that is dont refresh react but navigate to a new page so for it we will use link which will come from reacr router dom 
import link 
 # routing 
 # 2 types 
 -client side routing //Client side routing aas we are not fetching a new page as this is a single page application 
 -server side routing //refresh page for each route now make our page functional 



 ............................different pages for different restaurant...................................
 created a router page for restaurant menu but it shouldn have dynamic data and also create a route for it
 as we want this route to be a dynamic path so we "use /: and id for dynamic id use slash colon"
 got it for recommended items 

 ..........successfully routed different pages url through a super power useParams and destrurized our id 
 now making these restaurants clickable
in html we will show anchor tag only while using LINK because LINK use anchor tag  but why cant we use it at first place link is a wrapper over anchor tag link dont refresh page all the props passed are converted as a obj ans passed in props in class based so we have to use this.props.name




...................................................LETS GET CLASSY........................................
About us page is made of class based components
class based components are just class which have method render which returns piece of jsx its syntax is class User extends React.component{
    render(){
        return(
            <div></div>
        )
    }
}  

in class based component we get props as constructor 
declare a constructor pass props to it make a method with keyword super and pass props to it as well this will hold props u can not avoid super props we are doining this because when we create a class in react it is a extenbd of a parent class buy just passing props to our class will not work u have to pass this to parent also for that super props is used 

create state variables in class component in function component we use a hook in class declaring  multiple state state variable is just using a comma and declare in on the top inside this.state as this is a huge object which has all the state 
tip====> in functional based component also react do the same behind the scene we use 2 -3 etc use state but behind the scene react converts them into 1 object 
how can we change state in   class have
this.state.count to change state this will pass a object of updated state efer uercLASS

componentdidmount

parent constructor 
parent render 


child constructor 
child render


child constructor 
child render 
child 1 componend did mount
child 2 component did mount
parent component did mount this is happens as react makes render batch for it 
and then commit it 

react first update with dummy data then after domponenetdidmount updates data

react will first render dummy data after apio call it rerendes with updated value and these value are then updated because of reconsillation algorithm happensthen it will call componentdidupdate 
life cycle============================>
//////////// MOUNTING//////////////////
# constructor called 
# render() dummy  called 
# now html has dummy data for few seconds 
# then component didMount called (API CALLED)
# this.setsTATE 
///////////UPDATE/////////
# AFTER SETSTATE IS HIT IT TRIGGERS RECONCILLATION
# # render () ****API DATA***
# NOW HTML IS LOADED WITH NEW API DATA
# at this point user will see api data 
# it will call componentDidUpdate 
/////////////unmountinhg /////////////
# component will remove from Ui
# component will unmount will call when u change page as only when unmount will happen 


useEffect is completed different from componentdidmount
modern react code like functional based compoenents remved lifecycle methods useeffect(()=>{

},[]);====>this means it will only initial rounder,
useeffect(()=>{

},[count,count2]);====>this will call api everytime my count changes how can i do something like this in class based component 

unmounting makes our page scalable as react is a SPA and it doesnt reload some functions may keep hangingwhen we move to new page to some other to stop this unmounting is used for cleanup


# clean up in useEffect use effect chparustam nikla it also has a cleanup inside it which is==
# use effect return is called when u navigate from 1 page to another 



..................optimizing our app .............................
# single responsiblity ==> 
one component should have only 1 thing to do. for eg parent component pass props as restaurant card to res card component and its work is to load that 
if you are doining mutiplle things in single component than its better to do it in modular fasion which means devide in components
# custom hooks===>
 our res menu component is doining 2 responsiblities one is fetching data second is displayingdata
 creating a custom hook is not mandatory but its a good res menu should be concern about only displaying data 
 to single response my menu page i have passed id to my custom hook id is extracted by my useParams and that id isn passed to my userestaurantMenu=(resid)=>{

    useEffect

    fetchData()

 }
 const fetchdATA=async()=>{
    const data =await fetch("api+resID);
    CONST JSON =AWAIT data.json()
    setresdatastate()
    

 }


 creating a custom hook for online and offline (internet connection)


# how to write a custom hook 
1> finalise the contract of hook what is the input of the hook and what is the output of the hook 

practice hooks i have defined a hook as useOnlineStatus and then imported as state everywhere now when using it just keep in mide its returning true and false it csn u reused as 


const const online status = useOnlineStatus 
if onlineStatus === false do thois else do this its easy right?

 also in our useParams resid = has useParams inside it 


 # scaling our app 
 it can be done by slitting our bundeled one js file tomultiple by 
 chunking 
 lazeloading 
 # add lazy loading in resume must its very imp 
 
# starting tailwind css

cirtain size = w-[200px]

# HOC its a function which takes a component and returns a component 
its acts as a enhancer which takes a component makes it more better and returns it 
we will develop a feature some of restuarants are promoted in swiggy there cards is similar just some promoted restaurants have a promotion 
we will take restaurants take a card and spit out card which have 
# UI layer is powered by data Layer
learning to manage data properly all the code in {} is basically updating our data layer 

# now building a accordian 
accordian has 2 types accordian heaader and accordian body 
# while making a map for making as many component based on data always use () after map not{} it will not repond  start
 