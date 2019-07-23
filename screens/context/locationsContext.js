import React from "react";

export const LocationContext = React.createContext();

class LocationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null, 
      longitude: null,
      history: [],
      findCurrentLocation: this.findCurrentLocation
    };
  }
  
  findCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);

        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        console.log('latitude: ',this.state.latitude);
        console.log(this.state.longitude);

        this.setState({
          latitude,
          longitude,
          history: [...this.state.history, [latitude, longitude]]
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <LocationContext.Provider value={this.state}>
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}

export default LocationProvider;