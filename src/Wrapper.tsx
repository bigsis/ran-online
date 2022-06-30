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
                <h1>Hello {this.state.val} World</h1>
                <button type="button" onClick={this.changeValue}>Change value</button>
                <div className="row">
                    <div className="columns large-3"/>
                    <div className="large-up-n card large-6">
                        <img src="assets/img/generic/rectangle-1.jpg"/>
                        <div className="card-section">
                            <p>This is a simple card with an image.</p>
                        </div>
                    </div>
                    <div className="columns large-3"/>
                </div>


                <div className="row medium-4 large-4 columns">
                    <div className="blog-post">
                        <h3>Awesome blog post title <small>3/6/2015</small></h3>

                    </div>
                </div>

                <Spec/>
            </div>
        );
    }
}

export default Wrapper;