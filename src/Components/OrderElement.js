import React from 'react';

class OrderElement extends React.Component{

    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);

    }

    onDelete(){
        this.props.onClickRemove();
    }

    render() {
        return <div className="OrderElement">
                    <h3>{this.props.food.descripcion}  ${this.props.food.precio}</h3>
                    <button className="btn btn-info btn-lg" onClick={this.onDelete}>
                        Eliminar</button>
                </div>;
    }
}

export default OrderElement;