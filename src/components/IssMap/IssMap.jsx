
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import issLogo from '../../resourses/images/iss-png-file-iss-emblem-png-1891.png';
import tick from '../../resourses/images/tick.png';
import cross from '../../resourses/images/cross.png';
import googleMapsStyles from '../../resourses/googleMapsStyles';
import myApiKey from '../../config.js';
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    const containerStyle = {
      position: 'relative', 
      width: '100%',
      height: '100%' 
    }
////////okay sort this for real
    export class MapContainer extends Component {

      render() {
        return (
          <Map
          className="map"
            google={this.props.google}
            zoom={3}
            style={mapStyles}
            styles={this.props.mapStyle}
            initialCenter={
              {
                lat:(this.props.issLocation.latitude===null)?30:this.props.issLocation.latitude,
                lng:(this.props.issLocation.longitude===null)?30:this.props.issLocation.longitude
              }
            }
          >
               {!(this.props.issLocation.latitude===null) &&<Marker 
                 position={{ lat:this.props.issLocation.latitude, lng:this.props.issLocation.longitude}}
                 name="The International Space Station" 
                 icon={issLogo}/> }
              
              {!(this.props.userLocation.lat===null) &&<Marker 
                position={{lat:this.props.userLocation.lat, lng:this.props.userLocation.lng}} 
                name="Your Location"/>   }        
      </Map>
        );

                }
    }
    MapContainer.defaultProps = googleMapsStyles;
    export default GoogleApiWrapper({
      apiKey: myApiKey
    })(MapContainer);
    
