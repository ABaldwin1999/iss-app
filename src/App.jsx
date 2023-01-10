import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './containers/Header/Header';
import About from './components/About/About';
import { useEffect, useState } from 'react';
import FindIss from './containers/FindISS/FindIss';

function App() {
  const [issLocation, setIssLocation] = useState({latitude:30,longitude:30});
  const [userLocation, setUserLocation] = useState([]);
  const [visible,setVisible] = useState(false);
  const [count, setCount] = useState(0);
  let message = "";
  const getIssLocation = async () => {
    const res = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await res.json();
  setIssLocation(data.iss_position);
  getUserLocation();
  setVisible(true); 
  };

  const getUserLocation=()=> {
    navigator.geolocation.getCurrentPosition(showPosition);
}
const showPosition =(position)=> {
const {
  latitude,
  longitude
} = position.coords;
setUserLocation({lat: latitude,lng:longitude});}

 const tick = () => {
  setCount((prevState) => prevState < 30000 ? prevState +1 : 0);
}
 useEffect(() => {
  const timer = setInterval(() => tick(), 30000);
  return () => clearInterval(timer);
});
  useEffect(() => {
    if (count === 0) {
    getIssLocation();
    }
  },[count]);

  if(visible){
  if((issLocation.latitude-1<userLocation.lat<issLocation.latitude +1)&&(issLocation.longitude -1<userLocation.lng<issLocation.longitude +1)){
   console.log(issLocation.latitude-1,userLocation.lat,issLocation.latitude +1);
    message=" Look up! You might see it! "
  }else{
    message=" You can't see it... but it can see YOU "
  }
}
  return (
    <div className="App">
      <Router>
<Header message={message}/>
<Routes>
<Route path='/' element={<About/>}/>
  <Route path='/findtheiss' element={<FindIss userLocation={userLocation} issLocation={issLocation} visible={visible}/>}/>
</Routes>
</Router>
    </div>
    
  );
}

export default App;

