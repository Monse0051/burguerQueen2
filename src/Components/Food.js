import React from 'react';
import './Food.css';


class Food extends React.Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick(){
        this.props.onHandleOrder(this.props.food);
    }

    render(){
        return <div>
                    <button className= "food btn btn-success btn-lg" onClick={this.onClick}>
                        {this.props.food.descripcion} <br></br>
                        {" $" + this.props.food.precio }
                    </button>
                </div>
    }
}

export default Food;