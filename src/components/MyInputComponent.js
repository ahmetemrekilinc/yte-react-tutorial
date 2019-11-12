import React, {Component} from 'react';

class MyInputComponent extends Component {

    state = {
        inputValue: ""
    };

    inputChanged(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return <div>
            İsim: <input value={this.state.inputValue} onChange={(e) => this.inputChanged(e)} ></input>
            <button onClick={() => {this.props.elemanEklendi(this.state.inputValue)}} >ekle</button>
        </div>;
    }

}

export default MyInputComponent;
