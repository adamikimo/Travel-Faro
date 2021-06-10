import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './Home';
import Transportations from './Transportations';
import AboutFaro from './AboutFaro';
import ContactUs from './ContactUs';
import ElCairo from './ElCairo';
import Sidebar from '../components/Sidebar';
import Aswan from './Aswan';
import Header from '../components/Header';
import Chats from './Chats';
import Packages from './Packages';
import Luxor from './Luxor';
import Hurgada from './Hurgada';
import Sharm from  './Sharm';
import '../css/app.css';

interface Props{

}

const App: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  let [ imgUrl, setImgUrl ] = useState('');
  const handleVisible = () => {
    if(visible === false) {
      setVisible(true);
    } else{
      setVisible(false);
    }
  }
  const closeSidebar = () => {
    setVisible(false);
  }

  // call api
  
  
  // get the onClickCard event
  return (
    
    <Router>
  <Header 
  onClickIconButton={handleVisible}
  />
  <div
  className='app'
  onClick={closeSidebar}
  >
    <Sidebar 
    visible={visible === false ? 'hidden' : 'block'}
    onClick={() => setVisible(false)}
    />
    <Switch>
    <Route 
    path='/'
    render={() => <Home 
    onClick={closeSidebar}
    />}
    exact
    />
    <Route 
    path='/cards/excurtions/aswan'
    component={Aswan}
    />
    <Route 
    path='/transportations'
    render={() => <Transportations 
    onClick={closeSidebar}
    />}
    />
    <Route 
    path='/porque travel faro'
    render={() => <AboutFaro 
    onClick={closeSidebar}
    />}
    />
    <Route 
    path='/contactenos'
    render={() => <ContactUs 
    onClick={closeSidebar}
    />}
    />
    <Route 
    path='/cards/excurtions/elCairo'
    component={ElCairo}
    />
    <Route 
    path='/Chats'
    render={() => <Chats 
    onClick={closeSidebar}
    />}
    />
    <Route 
    path='/Paquetes'
    render={() => <Packages 
    onClick={closeSidebar}
    />}
    />
    <Route 
    path='/cards/excurtions/luxor'
    component={Luxor}
    />
    <Route 
    path='/cards/excurtions/hurgada'
    component={Hurgada}
    />
    <Route 
    path='/cards/excurtions/sharmElSheikh'
    component={Sharm}
    />
    </Switch>
    {/* <div className="elfsight-app-6dd07237-5a88-4d56-99cd-e0f833f29790 whatsappChat"></div> */}
  </div>
  </Router>
  );
}

export default App;