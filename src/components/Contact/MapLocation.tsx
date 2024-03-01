import { useEffect} from 'react';

import mapboxgl from 'mapbox-gl';
import "./MapLocation.css"


mapboxgl.accessToken = 'pk.eyJ1IjoiZXNzdW1hbi1nMTkiLCJhIjoiY2x0OGh5YzBhMG84YjJqbTd6ZHFvZmxkcCJ9.ec_VlyJ5nMUqFlDM4bOpGQ';


const MapLocation = () => {    

useEffect(() => {

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.060982, 42.35725],
    zoom: 8
  });

  return () => {
      map.remove();
 
  };
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
      
  )
}

export default MapLocation