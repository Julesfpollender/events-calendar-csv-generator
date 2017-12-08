const { generalConfig, events, generateCompleteEvents } = require('../config');
const eventsModule = require('./events');
const fs = require('fs');

const schema = require('../schema');
const scHeader = schema.csvHeader;

const output = 'H18.csv';
const delimiter = ', ';
generateCSV();

function generateCSV() {
  fs.unlink(output).then(() => {
    writeFileHeader(scHeader);
    const eventsList = eventsModule.generateRecurringEvents(
      events,
      generalConfig
    );
    writeFile(generateCompleteEvents(eventsList), header);
  });
}

function writeFileHeader(header) {
  const line = Object.keys(header)
    .map(key => header[key])
    .join(delimiter);
  fs.appendFileSync(output, line + '\n');
}

function writeFile(event, header) {
  events.forEach(event => {
    const line = Object.keys(header)
      .map(key => event[key])
      .join(delimiter);
    fs.appendFileSync(output, line + '\n');
  });
}
