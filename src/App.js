import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';
import './App.css';


class App extends Component {

  state = {
      hotels: [
        {
          id: '1',
          name: 'Pod Akacjami',
          city: 'Wrocław',
          rating: '8.3',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
          image: ''
        },
        {
          id: '2',
          name: 'Dębowy',
          city: 'Lublin',
          rating: '8.8',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
          image: ''
        },
        {
          id: '3',
          name: 'Nowy',
          city: 'Warszawa',
          rating: '8.9',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
          image: ''
        }        
      ]
    };

    
    render() {
    
    return (
      <div className="App">
        <Header />
        <Menu />
        <Hotels
         hotels={this.state.hotels} 
         />
      </div>
    );
  }
} 

export default App;
