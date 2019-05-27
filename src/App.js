import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import MenuType from './Components/MenuType';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
import Cocina from './Components/Cocina'

class App extends React.Component {

  constructor(props){
    super(props);
    this.ID = "vMH5efLYsj23yjapA3rf";
    this.state = {
      error: null,
      isLoaded: false,
      menu: {}
    };
  }

  componentDidMount(){
    const firebase = require("firebase/firebase");
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCjy0hWWi5gvz23Pm87OmnWA00vLSjx-SA",
      authDomain: "burguer-queen-24934.firebaseapp.com",
      databaseURL: "https://burguer-queen-24934.firebaseio.com",
      projectId: "burguer-queen-24934",
      storageBucket: "burguer-queen-24934.appspot.com",
      messagingSenderId: "338402146466",
      appId: "1:338402146466:web:deef35a2e34880bb"
    };
    // Initialize Firebase
    let app = firebase.initializeApp(firebaseConfig);

    const dataBase = app.firestore();
    let menuRef = dataBase.collection("Menu").doc(this.ID);

    menuRef.get()
      .then(menu =>{
        if (!menu.exists) {
          console.log('Menu not found in firebase!');
        } else {
          console.log('Document data:', menu.data());
          this.setState({
            isLoaded: true,
            menu: menu.data()
          });
        }
      }, 
      error=>{
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  render() {
    const { error, isLoaded, menu } = this.state;
    // TODO: handle error and isLoaded === false
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <BrowserRouter>
        <div className="Burguer-Queen">
            <Navbar/>
          <div className="numero de mesa"> 
          </div>
          <div className="Menus">
            <Route exact path = "/" render = {()=> <MenuType
              menu={menu}
              id = {this.ID}
            />}/>
            <Route path = "/Cocina" render = {()=> <Cocina/>}/>    
          </div>

        </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
