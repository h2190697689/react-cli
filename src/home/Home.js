import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { Divider, Button } from "antd";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "min",
            num: 0
        };
    }

    componentDidMount() {
        this.setState({num: this.state.num + 1});
        console.log(this.state.num);
        this.setState({num: this.state.num + 1});
        console.log(this.state.num);
        setTimeout(() => {
            this.setState({num: this.state.num + 1});
            console.log(this.state.num);
            this.setState({num: this.state.num + 1});
            console.log(this.state.num);
        },0)
    }

    render() {
        return (
            <div>
                <div className="name" { ...this.state } onClick={this.handleClick.bind(this)}>HELLO {this.state.name}</div>
                <Divider/>
                <NavLink to="/transition">
                <Button>Transition</Button>
                </NavLink>
                <Divider/>
                <NavLink to="/cssTransition">
                <Button>CSSTransition</Button>
                </NavLink>
                <Divider/>
                <NavLink to="/switchTransition">
                <Button>SwitchTransition</Button>
                </NavLink>
                <Divider/>
                <NavLink to="/transitionGroup">
                <Button>TransitionGroup</Button>
                </NavLink>
            </div>
        )
    }

    async handleClick() {
        const name = await Promise.resolve("hejiamin");
        console.log(name);
        this.setState({
            name
        });
        console.log("async await 执行成功")
    }
}

export default Home;
