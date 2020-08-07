import React, { Component } from 'react';
import { Transition } from "react-transition-group";

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

class Tron extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <Transition in={true} timeout={300}>
                    {
                        state=> (
                            <div style={{  transition: `opacity 300ms ease-in-out`,opacity: 0,...transitionStyles[state]}}>
                                fdsghgfdsa</div>
                        )
                    }
                </Transition>
                <button></button>
            </div>
        )
    }
}
export default Tron;
