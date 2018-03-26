const { getConfig, generateCompleteEvents } = require('../config');
const eventsModule = require('./events');
const fs = require('fs');

const schema = require('../schema');
const scHeader = schema.csvHeader;
const generalConfig = getConfig().general;
const events = getConfig().events;

const output = generalConfig[schema.config.SESSION_NAME] + '.csv';
const delimiter = ', ';
generateCSV();

function generateCSV() {
  fs.unlink(output, () => {
    writeFileHeader(scHeader);
    const eventsList = eventsModule.generateRecurringEvents(
      events,
      generalConfig
    );
    writeFile(generateCompleteEvents(eventsList), scHeader);
  });
}

function writeFileHeader(header) {
  const line = Object.keys(header)
    .map(key => header[key])
    .join(delimiter);
  fs.appendFileSync(output, line + '\n');
}

function writeFile(events, header) {
  events.forEach(event => {
    const line = Object.keys(header)
      .map(key => event[header[key]])
      .join(delimiter);
    fs.appendFileSync(output, line + '\n');
  });
}
