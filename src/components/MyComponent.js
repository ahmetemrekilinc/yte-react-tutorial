import React, {Component} from 'react';
import './MyComponent.css';

class MyComponent extends Component {

    state = {
      myCounter: 10,
        myKey1: 1,
        myKey2: "key2"
    };

    incrementCount(){
        this.setState({
            myCounter: this.state.myCounter + 1
        });
    }

    render(){
        let myVar = "my variable";

        let fontStyle = {
            fontSize: "" + this.state.myCounter + "px"
        };

        return <div className="MyClass" style={fontStyle} >this is my component and my name is {this.props.name}
        and myVar is {myVar} and
        my children is {this.props.children}
        <br/>
        and my counter is {this.state.myCounter}
        <button onClick={() => {this.incrementCount()}} >increment counter</button>

        </div>;
    }

}

export default MyComponent;
