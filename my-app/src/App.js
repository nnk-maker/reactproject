//import React, { useEffect, useRef, useState } from "react";
import "./assets/css/style.css"
import Images from "./components/Images";




 function App() {
    /* const [title, setTitle] = useState("Hellow React"); */
          
    return (
        <section className="flex justify-center">
           
                    <div className="w-10/12">
                      <div className="text-center">
                       {/*  <div className="my-4">{title}</div> */}
                    
                        <Images />

                      </div>
                      
                    </div>
            </section>
    )
    
}  

 
//  class App extends React.Component{
//     /* constructor(props){
//        // console.log("App Constructor");
//         super(props);
//         this.state={title: "Hello React 2", isShowing:false};
//       //  this.handleClick = this.handleClick.bind(this);

//     } */

//     //Arrow function
//     /* handleClick = () => {
//         this.setState({isShowing: !this.state.isShowing})
//      } */

//      componentDidMount() {
//          console.log("App Mounted");
//         // this.setState({title: "HelloLifeCycle"});
//      }

//      componentDidUpdate(){
//          console.log("App Updated");
//      }
     
//     /* handleClick = () =>{
//         this.setState({isShowing: !this.state.isShowing})
//      } */
//     // sates are immutable
//     render(){
//         console.log("App render");
//         return(
//             <section className="flex justify-center">
//                     <div className="w-1/2">
//                       <div className="text-center">
//                         <div className="my-4">{this.state.title}</div>
                    
//                         <div>
//                            <button className="p-1 bg-blue-700 text-white my-2"
//                             onClick={this.handleClick}
//                             >Toggle Image
//                             </button>
                           
//                         </div>
//                         {
//                             this.state.isShowing ? 
//                             ( <Images/> ) 
//                             : null
                           

//                         }
                        
//                       </div>
                     
//                     </div>
//             </section>
             
//              );
//     }
// }
 

export default App;