import React from 'react';

class SendTo extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);

        this.dataBase = null;
    }

    componentDidMount(){
        const firebase = require("firebase/firebase");
        const app = firebase.app();
        this.dataBase = app.firestore();
    }

    onClick(){
        console.log("sending order...", this.props.order);

        const order = {
            orderList: this.props.order,
            table: this.props.table,
            date: Date.now()    
        }

        let setOrder = this.dataBase.collection("Ordenes").doc().set(order);

        this.props.onSend();
    }

    render(){
        return (
            <button className="send-to"
                onClick={this.onClick}
                disabled={!this.props.enabled}>
                Enviar a cocina
            </button>
        );
    }
}

export default SendTo;