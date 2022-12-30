import './App.css';
import Header from './components/header';
import MainBody from './components/mainbody';
import Footer from './components/footer';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
