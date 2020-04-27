import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { PinIcon } from '../svg/index';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoic2VzY2h3YXJ0ejgiLCJhIjoiY2s5aW83cXNxMWJ1MTNrbGxzaW55YmFqbCJ9.Wcju4UV4OLz90abpY6HtuA' ||
  '';

const initialState = {
  viewport: {
    height: 400,
    latitude: 37.776021,
    longitude: -122.4171949,
    minZoom: 2,
    width: 400,
    zoom: 2,
  },
  markerLocations: [
    { latitude: 37.776021, longitude: -130.4171949 },
    { latitude: 37.776021, longitude: -122.4171949 },
    { latitude: 45.776021, longitude: -122.4171949 },
  ],
};

interface LatLng {
  latitude: number;
  longitude: number;
}

interface MapProps {
  destinations: LatLng[];
}

type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<MapProps, State> {
  constructor(props: MapProps) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  updateViewport = (viewport: Viewport) => {
    this.setState((prevState) => ({
      viewport: { ...prevState.viewport, ...viewport },
    }));
  };

  resize = () => {
    this.setState((prevState) => ({
      viewport: {
        ...prevState.viewport,
        height: window.innerHeight,
        width: window.innerWidth,
      },
    }));
  };

  renderMarkers = () => {
    return this.props.destinations.map((location, index) => {
      return (
        <Marker
          key={index}
          latitude={location.latitude}
          longitude={location.longitude}
        >
          {PinIcon()}
        </Marker>
      );
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(v: Viewport) => this.updateViewport(v)}
      >
        {this.renderMarkers()}
      </ReactMapGL>
    );
  }
}
