const eventsModule = require('./events');
const schema = require('../schema');
const scHeader = schema.csvHeader;
const scConfig = schema.config;
const utils = require('./utils');

describe('events', () => {
  const mockConfig = {
    [scConfig.NB_RECURRING_WEEK]: 15,
    [scConfig.BREAK_FROM]: '2018-03-05',
    [scConfig.BREAK_TO]: '2018-03-09'
  };

  describe('generateRecurringEvents', () => {
    it('should generate events for the correct number of weeks and with break time', done => {
      const mockEvents = [
        {
          [scHeader.TITLE]: 'event1',
          [scHeader.DATE_START]: '2018-01-08'
        },
        {
          [scHeader.TITLE]: 'event2',
          [scHeader.DATE_START]: '2018-01-09'
        }
      ];
      const eventsList = eventsModule.generateRecurringEvents(
        mockEvents,
        mockConfig
      );
      expect(eventsList.length).toEqual(2 * (15 - 1));
      done();
    });
    it('should correctly create events base on dates', done => {
      const mockEvents = [{ [scHeader.DATE_START]: '2018-01-08' }];
      const expectedResult = [
        { [scHeader.DATE_START]: '2018-01-08' },
        { [scHeader.DATE_START]: '2018-01-15' },
        { [scHeader.DATE_START]: '2018-01-22' },
        { [scHeader.DATE_START]: '2018-01-29' },
        { [scHeader.DATE_START]: '2018-02-05' },
        { [scHeader.DATE_START]: '2018-02-12' },
        { [scHeader.DATE_START]: '2018-02-19' },
        { [scHeader.DATE_START]: '2018-02-26' },
        { [scHeader.DATE_START]: '2018-03-11' },
        { [scHeader.DATE_START]: '2018-03-18' },
        { [scHeader.DATE_START]: '2018-03-25' },
        { [scHeader.DATE_START]: '2018-04-01' },
        { [scHeader.DATE_START]: '2018-04-08' },
        { [scHeader.DATE_START]: '2018-04-15' }
      ];
      const eventsList = eventsModule.generateRecurringEvents(
        mockEvents,
        mockConfig
      );
      expect(eventsList).toEqual(expectedResult);
      done();
    });
    it('should generate events with the corresponding csv header', done => {
      //TODO
      done();
    });
  });
});
