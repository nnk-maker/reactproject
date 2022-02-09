import React, { PureComponent } from 'react';

export default class images extends PureComponent {

    constructor(props){
        console.log(props);
        super(props);
        this.state = { interval: null};
    }
    componentDidMount(){
        console.log("Images component mounted");
        this.setState({
           interval: setInterval( () => {
            console.log("Hello");
        }, 1000

        )
        })
        
    }

    componentWillUnmount(){
        console.log ("Images component Unmounted");
        clearInterval(this.state.interval);
       
     }

  render() {
    return ( 

    <img src="https://images.unsplash.com/photo-1643685623589-625d36ffb709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
    
    );
  }
}
