// import React from 'react';
// import mapboxgl from 'mapbox-gl';
// import ReactMapboxGl, { Marker, ZoomControl, ScaleControl } from 'react-mapbox-gl';

// const Map = (props) => {


//   return ( props.zoom ?
//     (<div>
//       <ReactMapboxGl
//         style="mapbox://styles/mapbox/dark-v9"
//         accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
//         containerStyle={{height: '8vh'}}
//         center={props.coords}
//         zoom={[props.zoom]}
//         light={{
//           anchor: 'viewport',
//           color: 'white',
//           intensity: 0.4
//         }}
//       >
//       <Marker
//             coordinates={props.coords}
//           >
//             <img src={'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/cannaco/CannaCo-Logo-Marker.png'} alt="mapCenter" />
//           </Marker>
//       </ReactMapboxGl>
//     </div>)
//     : (<div>
//       <ReactMapboxGl
//         style="mapbox://styles/mapbox/dark-v9"
//         accessToken="pk.eyJ1Ijoic3pvbGwiLCJhIjoiY2oxanIwcHI4MDFicDMzcG1wenNmbXlqbCJ9.oRYXUrA-6QSwq2tYGLN2xw"
//         containerStyle={{height: '8vh'}}
//         center={props.coords}
//         pitch={50}
//         zoom={[9]}
//         light={{
//           anchor: 'viewport',
//           color: 'white',
//           intensity: 0.4
//         }}
//       >
//       </ReactMapboxGl>
//     </div>)
//   )
// }

// export default Map;