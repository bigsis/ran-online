import React, {ComponentClass} from 'react';
import banner from './images/ran_playpark_1920x400-logo.jpeg'
import './css/Wrapper.css';
import Spec from "./spec";

class Wrapper extends React.Component<ComponentClass, any>{
    constructor(props: any) {
        super(props);
        this.state = {val: "hello"}
    }

    changeValue = () => {
        this.setState(
            {val: "Earth"}
        )
    }

    render(){
        return(
            <div>
                <img src={banner} className="banner" alt="logo" />
                {/*<h1>Hello {this.state.val} World</h1>*/}
                {/*<button type="button" onClick={this.changeValue}>Change value</button>*/}
                <div className="row">
                    <div className="columns large-3"/>
                    <div className="large-up-n card large-6">
                        <div className="callout primary medium">
                            <p>RAN is coming soon!🔥</p>
                        </div>
                    </div>
                    <div className="columns large-3"/>
                </div>
                <Spec/>
            </div>
        );
    }
}

export default Wrapper;