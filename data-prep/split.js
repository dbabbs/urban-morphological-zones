const data = require('./output.json');
const numSplits = 50;
const fs = require('fs');

const interval = data.features.length / numSplits;
console.log('data is ' + data.features.length + ' long');

for (let i = 0; i < numSplits; i++) {
   const focus = data.features.slice(i * interval, (i + 1) * interval);
   const sectionOutput = [];
   focus.forEach((row) => {
      sectionOutput.push([row.properties.Area_ha, row.geometry.coordinates]);
   });
   fs.writeFile(
      '../public/split/' + 'data' + i + '.json',
      JSON.stringify(sectionOutput),
      () =>
         console.log(
            'wrote indexes' + i * interval + ' to ' + (i + 1) * interval
         )
   );
}
