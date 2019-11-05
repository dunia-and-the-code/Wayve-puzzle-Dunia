import React, { Component } from 'react';

import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    position: 'relative',
    display: 'block',
    width: '900px',
    height: '700px',
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    //Event handler opens popup stats window when marker is clicked
    //Selected markers value data is stored in state
    //Popup is rendered using a true / false state
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    //Event handler closes popup stats windown when marker x is clicked
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    //Function that creates location markers
    displayMarkers = () => {
        return this.props.data.map((dataItem, index) => {
            return <Marker key={index} id={index} position={{
                lat: dataItem.lat,
                lng: dataItem.long
            }}
                onClick={this.onMarkerClick}
                reason={dataItem.reason}
                action={dataItem.action}
            />
        })
    }

    //Function that creates popup stats windows
    displayInfoWindow = () => {
        return <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
        >
            <div className='map-marker'>
                <h3 className='stats'>Location</h3>
                <h4>Adress : </h4>
                <h3 className='stats'>Stats</h3>
                <h4>Reason : {this.state.selectedPlace.reason}</h4>
                <h4>Action : {this.state.selectedPlace.action}</h4>
            </div>
        </InfoWindow>
    }


    render() {

        return (

            <div className='map'>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 52.2012444,
                        lng: 0.136282548
                    }}
                >
                    {this.displayMarkers()}

                    {this.displayInfoWindow()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB-oLIhlolqGamv12XCpZlpIznPAmLapIQ'
})(MapContainer);