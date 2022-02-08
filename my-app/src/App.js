import React from "react";
import "./assets/css/style.css"



  /* function App({title}) {

    return (
        <div>
            <div className="bg-gray-600 text-white p-5 border">{title}</div>        
        </div>);
    
}   */

 
 class App extends React.Component{
    constructor(props){
        super(props);
        this.state={title: "Hello React 2", isShowing:false};

    }

    handleClick = () => {
        this.setState({isShowing: !this.state.isShowing})
     }
    // sates are immutable
    render(){
        return(
            <section className="flex justify-center">
                    <div className="w-1/2">
                      <div className="text-center">
                        <div className="my-4">{this.state.title}</div>
                    
                        <div>
                           <button className="p-1 bg-blue-700 text-white my-2"
                            onClick={this.handleClick}
                            >Toggle Image
                            </button>
                           
                        </div>
                        {
                            this.state.isShowing ? 
                            ( <img src="https://images.unsplash.com/photo-1643685623589-625d36ffb709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />) 
                            : null
                           

                        }
                        
                      </div>
                     
                    </div>
            </section>
             
             );
    }
}

export default App;