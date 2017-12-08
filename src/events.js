const utils = require('./utils');

const schema = require('../schema');
const scHeader = schema.csvHeader;
const scConfig = schema.config;

module.exports = { generateRecurringEvents };

function generateRecurringEvents(events, config) {
  let eventsList = [];
  for (let i = 0; i < config[scConfig.NB_RECURRING_WEEK]; i++) {
    events.forEach(event => {
      const newDate = utils.addDays(event[scHeader.DATE_START], i * 7);
      if (
        !utils.isDateBetween(
          newDate,
          config[scConfig.BREAK_FROM],
          config[scConfig.BREAK_TO]
        )
      ) {
        eventsList.push(
          Object.assign({}, event, {
            [scHeader.DATE_START]: newDate
          })
        );
      }
    });
  }
  return eventsList;
}
