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
      if (!_isOnBreak(newDate, config)) {
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

function _isOnBreak(date, config) {
  if (!config[scConfig.BREAK_FROM] || !config[scConfig.BREAK_TO]) {
    return false;
  }
  if (
    !utils.isDateLower(config[scConfig.BREAK_FROM], config[scConfig.BREAK_TO])
  ) {
    console.error('Break dates are invalid');
    return false;
  }
  return utils.isDateBetween(
    date,
    config[scConfig.BREAK_FROM],
    config[scConfig.BREAK_TO]
  );
}
