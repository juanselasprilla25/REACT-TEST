// import React, { Component, useState, useEffect } from "react"
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// // /**
// //  * Styles
// //  */
// // // import "./map.css"

// export class MapContainer extends Component {
//   constructor(props) {
//     super()
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//       currentPosition: {},
//     }
//   }

//   success = position => {
//     const currentPosition = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude,
//     }
//     this.setCurrentPosition(currentPosition)
//   }

//   setCurrentPosition = pos => {
//     this.setState({ currentPosition: pos })
//   }

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     })

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       })
//     }
//   }

//   componentDidUpdate() {
//     navigator.geolocation.getCurrentPosition(this.success)
//   }

//   render() {
//     const containerStyle = {
//       position: "relative",
//       width: "100%",
//       height: "100%",
//     }
//     return (
//       <Layout>
//         <SEO title="ToDo List" />
//         <h1
//           style={{
//             marginBottom: "15px",
//           }}
//         >
//           Map Tracker
//         </h1>
//         <Map
//           google={this.props.google}
//           zoom={16}
//           style={{
//             position: "fixed",
//             top: "80px",
//             left: "0px",
//             width: "60%",
//             height: "60%",
//             margin: "0",
//           }}
//           initialCenter={{
//             lat: 4.65864,
//             lng: -74.1034357,
//           }}
//           centerAroundCurrentLocation={true}
//         >
//           <Marker
//             onClick={this.onMarkerClick}
//             name={"Current location"}
//             position={this.state.currentPosition}
//           />
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//             onClose={this.onClose}
//           >
//             <div>
//               <h4>{this.state.selectedPlace.name}</h4>
//             </div>
//           </InfoWindow>
//         </Map>
//         <Link to="/" className="button">
//           Go back to the homepage
//         </Link>
//       </Layout>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.api_key,
// })(MapContainer)

import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  constructor(props) {
    super()
    this.state = {
      currentPosition: {},
      center: {
        lat: 4.658034,
        lng: -74.095725,
      },
      zoom: 16,
    }
  }

  success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    this.setCurrentPosition(currentPosition)
  }

  setCurrentPosition = pos => {
    this.setState({ currentPosition: pos })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  componentDidUpdate() {
    navigator.geolocation.getCurrentPosition(this.success)
  }

  render() {
    return (
      <Layout>
        <SEO title="ToDo List" />
        <h1
          style={{
            marginBottom: "15px",
          }}
        >
          Map Tracker
        </h1>
        <div style={{ height: "100vh", width: "100%", margin: "30px auto" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.api_key }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent
              lat={this.state.currentPosition.lat}
              lng={this.state.currentPosition.lng}
              text="Current Position"
            />
          </GoogleMapReact>
        </div>
        <Link to="/" className="button" tabIndex="0">
          Go back to the homepage
        </Link>
      </Layout>
    )
  }
}

export default SimpleMap
