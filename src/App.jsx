import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import  MapContainer from './components/IssMap/IssMap';
import { useEffect, useState } from 'react';
import FindIss from './containers/FindISS/FindIss';

function App() {
  const [issLocation, setIssLocation] = useState([]);
  const [userLocation, setUserLocation] = useState([{lat:30,lng:30}]);
  const getIssLocation = async () => {
    const res = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await res.json();
  setIssLocation(data.iss_position);
  getUserLocation() 
  };

  const getUserLocation=()=> {
    navigator.geolocation.getCurrentPosition(showPosition);
}
const showPosition =(position)=> {
const {
  latitude,
  longitude
} = position.coords;
setUserLocation({lat: latitude,lng:longitude});
console.log(userLocation);
}

  useEffect(() => {
    getIssLocation();
  }, []);
  
  return (
    <div className="App">
      <Router>
<Nav/>
<Routes>
<Route path='/' element={<FindIss userLocation={userLocation} issLocation={issLocation}/>}/>
  <Route path='/findtheiss' element={<MapContainer/>}/>
</Routes>
</Router>
    </div>
    
  );
}

export default App;

