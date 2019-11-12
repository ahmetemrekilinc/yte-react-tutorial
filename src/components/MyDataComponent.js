import React, {Component} from 'react';
import MyInputComponent from './MyInputComponent';
import axios from 'axios';

class MyDataComponent extends Component {

    state = {
        elements: [
            {
                id: 1,
                name: "ahmet emre"
            }
        ]
    };

    elemanEklendiHandler(inputValue){
        let currentElements = [...this.state.elements];
        let newElement = {
            id: this.state.elements.length + 1,
            name: inputValue
        };
        currentElements.push(newElement);
        this.setState({
            elements: currentElements
        });
    }

    retrieveNextData(){
        axios.get("https://jsonplaceholder.typicode.com/todos/" + this.state.elements.length).then((result) => {
           console.log(result);
           this.elemanEklendiHandler(result.data.title);
        });
    }

    render(){

        let tableRows = this.state.elements.map((element, index) => {
            return <tr key={index}><td>{element.id}</td><td>{element.name}</td></tr>;
        });

        return <div>
            <MyInputComponent elemanEklendi={(inputValue) => this.elemanEklendiHandler(inputValue)} ></MyInputComponent>
            <button onClick={() => this.retrieveNextData()} >retrieve next data</button>
            <table border="1" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>;
    }

}

export default MyDataComponent;