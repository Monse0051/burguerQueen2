import React from 'react';
import Food from './Food';
import Total from './Total';
import SendTo from './SendTo';
import OrderElement  from './OrderElement'


class MenuDisplay extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            orderList : [],
            tableNumber: 0
        };
        this.onHandleOrder = this.onHandleOrder.bind(this);
        this.onSend = this.onSend.bind(this);
    }

    onHandleOrder(food){
        let newOrderList = this.state.orderList;
        newOrderList.push(food);
        this.setState({orderList: newOrderList});
    }

    onRemove(index){
        let orderList = this.state.orderList;

        let newOrderList = [
            ...orderList.slice(0, index),
            ...orderList.slice(index + 1)
        ];
        this.setState({orderList: newOrderList});
    }

    onSend(){
        console.log("DEBUG: Enviando a cocina");
        this.setState({orderList: []});
    }

    render(){
        let menuList = [];

        for (let index = 0; index < this.props.menuList.length; index++) {
            const food = this.props.menuList[index];
             //TODO: add a property key https://reactjs.org/docs/lists-and-keys.html#keys
            menuList.push(<div>
                <Food
                    key = {food.id}
                    food = {food}
                    onHandleOrder = {this.onHandleOrder}
                />
                </div>);
        }

        let total = 0;

        for (let index = 0; index < this.state.orderList.length; index++) {
            const order =  this.state.orderList[index];
            total += order.precio;
        }

        return <div className="MenuDisplay">
            <div className="MenuList">
                <ol>
                    {menuList}
                </ol>
            </div>
            <div className="container">
                <ol>
                    {this.state.orderList.map((food, index) => {
                        return (
                            <OrderElement
                                key={food.id + "_" + index.toString()}
                                food={food}
                                onClickRemove={()=>this.onRemove(index)}
                            />);
                    })}
                    <Total
                        total={total}
                    />
                    <SendTo
                        order={this.state.orderList}
                        table={this.state.tableNumber}
                        enabled={total>0}
                        onSend={this.onSend}
                    />
                </ol>
            </div>
        </div>;
    }
}

export default MenuDisplay;