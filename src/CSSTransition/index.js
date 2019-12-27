import React, { Component, Fragment } from 'react';
import { CSSTransition } from "react-transition-group";
import { Button } from "antd";

import "./index.scss";

class Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: "min"
        };
    }

    handleClick() {
        // this.setState((state, props)=>{
        //     return {
        //         show: !state.show
        //     }
        // })
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <Fragment>
                <h1> hello { this.state.name }</h1>
                <Button onClick={ this.handleClick.bind(this) }>切换</Button>
                <CSSTransition in={this.state.show} classNames="detail" timeout={300}>
                    <Fragment>
                        <div className={ this.state.show ? 'test-wrap':'test-wrap hidden'}>
                            <h2>测试动画效果</h2>
                            <div className="test-item">2333</div>
                        </div>
                    </Fragment>
                </CSSTransition>
            </Fragment>
        )
    }
}

export default Transition;
