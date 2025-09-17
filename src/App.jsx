import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Search from './Components/Search/Search.jsx';
import Travelers from './Components/Travelers/Travelers.jsx';
import Support from './Components/Support/Support.jsx';
import Subscribers from './Components/Subscribers/Subscribers.jsx';
import Info from './Components/Info/Info.jsx';
import Lounge from './Components/Lounge/Lounge.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
}

export default App;
