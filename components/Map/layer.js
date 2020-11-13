import { PolygonLayer } from '@deck.gl/layers';

const getColorIndex = (val) => {
   const v = [31, 39, 54, 81, 153, 201249.0];
   for (let i = 0; i < v.length; i++) {
      if (val <= v[i]) {
         return i;
      }
   }
};

const layer = ({ id, data, scheme }) => {
   return new PolygonLayer({
      id,
      data,
      getPolygon: (d) => d[1],
      getLineColor: (d) => scheme[getColorIndex(d[0])],
      stroked: true,
      filled: true,
      getFillColor: [0, 0, 0, 0],
      getLineWidth: 0.2,
      lineWidthUnits: 'pixels',
      pickable: true,
   });
};

export default layer;
