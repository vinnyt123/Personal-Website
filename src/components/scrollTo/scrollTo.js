import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import './scrollTo.css'


class ScrollTo extends Component {

    constructor(props) {
        super();
        smoothscroll.polyfill();

        this.state = {
            position : 0,
            divsArray : []
        }

        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        this.setState({
                divsArray: [0, this.props.aboutRef, this.props.projectsRef, this.props.bottomRef]
            }
        )
    }
    
    scroll() {
        this.setState(
            {
                position: (this.state.position + 1) % 4
            }
        )
        const div = this.state.divsArray[this.state.position];
        if (div !== undefined && div.current != null) {
            window.scrollTo({top: div.current.offsetTop, behavior: 'smooth'});
        } else {
            //window.scrollTo({top: div, behavior: 'smooth'});
            window.scrollTo({top: div, behavior: 'smooth'});
        }
    }

    render() {
        return (
            <button className="scrollDown" onClick={this.scroll}>↓</button>
        );
    };
}

export default ScrollTo;