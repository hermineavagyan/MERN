import React, { Component }from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            age: this.props.age
        }
    }
    // ageIncrementer = ()=>{
    //     this.setState(this.state.age + 1);
    // }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h3>{lastName}, {firstName}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {hairColor}</p>
                <p><button onClick={()=>this.setState({age: this.state.age + 1})}>Birthday button for {firstName} {lastName}</button></p>
            </div>
        )            
        }
    }
export default PersonCard;

