import React, { useState, useMemo, useEffect } from 'react';
import { _GlobeView as GlobeView } from '@deck.gl/core';
import DeckGL from '@deck.gl/react';
import layer from './layer';
import styles from '../../styles/app.module.scss';
import schemes from './schemes';
import Tooltip from '../Tooltip';
const Map = ({}) => {
   const [viewState, setViewState] = useState({
      longitude: 12.249873285981433,
      zoom: 2.530366492599446,
      latitude: 49.89943116772561,
   });

   const [layers, setLayers] = useState([]);

   const [tooltip, setTooltip] = useState({
      position: null,
      coordinates: null,
   });

   useEffect(() => {
      const scheme = schemes[Math.floor(Math.random() * schemes.length)];

      async function fetchData() {
         for (let i = 0; i < 50; i++) {
            const data = await fetch(`split/data${i}.json`).then((res) =>
               res.json()
            );

            setLayers((l) => [
               ...l,
               layer({
                  id: `layer-${i}`,
                  data,
                  scheme,
               }),
            ]);
         }
      }

      fetchData();
   }, []);

   function limitViewState(viewState) {
      const bounds = [-8, 50, 30, 80];
      if (viewState.zoom <= 2) {
         viewState.zoom = 2;
      }
      if (viewState.longitude <= bounds[0]) {
         viewState.longitude = bounds[0];
      }
      if (viewState.longitude >= bounds[1]) {
         viewState.longitude = bounds[1];
      }

      if (viewState.latitude <= bounds[2]) {
         viewState.latitude = bounds[2];
         madr;
      }
      if (viewState.latitude >= bounds[3]) {
         viewState.latitude = bounds[3];
      }
      setViewState(viewState);
   }

   function onHover(evt) {
      if (evt.object) {
         // console.log(evt);
         const { x, y } = evt;
         setTooltip({
            position: [x, y],
         });
      } else {
         setTooltip({
            position: null,
         });
      }
   }

   return (
      <div className={styles.map}>
         {/* {tooltip.position && <Tooltip position={tooltip.position} />} */}

         <DeckGL
            layers={layers}
            initialViewState={viewState}
            controller={true}
            onViewStateChange={({ viewState }) => limitViewState(viewState)}
            // onHover={onHover}
         >
            <GlobeView id="globe" />
         </DeckGL>
      </div>
   );
};
export default Map;
