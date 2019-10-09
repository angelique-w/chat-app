import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact 
      name="Melissa West"
      image="https://randomuser.me/api/portraits/women/55.jpg"
      online
      />
      <Contact 
      name="Ted Myers"
      image="https://randomuser.me/api/portraits/men/52.jpg"
      />
      <Contact 
      name="Don Spencer"
      image="https://randomuser.me/api/portraits/men/82.jpg"
      online
      />
    </div>
  );
}

export default App;
