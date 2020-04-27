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
  markerLocation: { latitude: 37.776021, longitude: -122.4171949 },
};

type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<{}, State> {
  state: State = initialState;

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

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(v: Viewport) => this.updateViewport(v)}
      >
        <Marker
          latitude={this.state.markerLocation.latitude}
          longitude={this.state.markerLocation.longitude}
        >
          Hello
          {PinIcon()}
        </Marker>
      </ReactMapGL>
    );
  }
}
