import React from 'react';
import MenuDisplay  from './MenuDisplay';
import './MenuType.css';



class MenuType extends React.Component {

    constructor(props){
        super(props);
        this._addIdToList(this.props.menu.Desayunos, "desayuno");
        this.menuList = this.props.menu.Desayunos;

        this.state = {menuType: "desayuno"};
    }

    _addIdToList(arr, menuType){
        arr.forEach( (element, index) => {
            element.id = this.props.id + menuType + index.toString();
        });
    }

    _onClickSelectMenu(menuList, menuType){
        this.setState({menuType: menuType});
        this._addIdToList(this.props.menu.Comidas, menuType);
        this.menuList = menuList
    }

    onclickSelectDesayuno(){
        this._onClickSelectMenu(this.props.menu.Desayunos, "desayuno");
    }

    onclickSelectComida(){
        this._onClickSelectMenu(this.props.menu.Comidas, "comida");
    }


    render(){
        let buttonDesayunos =   (<button className = "menutype btn btn-outline-warning btn-lg" 
                                    onClick={()=>{this.onclickSelectDesayuno()}}>
                                    Desayunos
                                </button>);
        let buttonComidas =     (<button className = "menutype btn btn-outline-warning btn-lg"
                                onClick={()=>{this.onclickSelectComida()}}>
                                Comidas
                                </button>);

    
        return <div className="MenuType">
                    {buttonDesayunos}
                    {buttonComidas}
                    <MenuDisplay
                        menuList={this.menuList}
                    />
                </div>;
    }
}

export default MenuType;
