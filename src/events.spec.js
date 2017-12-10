const eventsModule = require('./events');
const schema = require('../schema');
const scHeader = schema.csvHeader;
const scConfig = schema.config;
const utils = require('./utils');

describe('events', () => {
  describe('generateRecurringEvents', () => {
    it('should generate events for the correct number of weeks and with break time', done => {
      const mockConfig = {
        [scConfig.NB_RECURRING_WEEK]: 15,
        [scConfig.BREAK_FROM]: '2018-03-05',
        [scConfig.BREAK_TO]: '2018-03-09'
      };
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
    it('should correctly create events base on dates and with break date', done => {
      const mockConfig = {
        [scConfig.NB_RECURRING_WEEK]: 15,
        [scConfig.BREAK_FROM]: '2018-03-05',
        [scConfig.BREAK_TO]: '2018-03-09'
      };
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
        { [scHeader.DATE_START]: '2018-03-12' },
        { [scHeader.DATE_START]: '2018-03-19' },
        { [scHeader.DATE_START]: '2018-03-26' },
        { [scHeader.DATE_START]: '2018-04-02' },
        { [scHeader.DATE_START]: '2018-04-09' },
        { [scHeader.DATE_START]: '2018-04-16' }
      ];
      const eventsList = eventsModule.generateRecurringEvents(
        mockEvents,
        mockConfig
      );
      expect(eventsList).toEqual(expectedResult);
      done();
    });
    it('should not consider break time if breaks date values are undefined or invalid', done => {
      const mockNbWeek = 15;
      const mockConfigUndefined = {
        [scConfig.NB_RECURRING_WEEK]: mockNbWeek,
        [scConfig.BREAK_FROM]: undefined,
        [scConfig.BREAK_TO]: '2018-03-09'
      };
      const mockConfigInvalid = {
        [scConfig.NB_RECURRING_WEEK]: mockNbWeek,
        [scConfig.BREAK_FROM]: '2018-03-09',
        [scConfig.BREAK_TO]: '2018-03-01'
      };
      const mockConfigNoBreak = {
        [scConfig.NB_RECURRING_WEEK]: mockNbWeek
      };
      const mockEvents = [
        {
          [scHeader.TITLE]: 'event1',
          [scHeader.DATE_START]: '2018-01-08'
        }
      ];
      expect(
        eventsModule.generateRecurringEvents(mockEvents, mockConfigUndefined)
          .length
      ).toEqual(mockNbWeek);
      expect(
        eventsModule.generateRecurringEvents(mockEvents, mockConfigInvalid)
          .length
      ).toEqual(mockNbWeek);
      expect(
        eventsModule.generateRecurringEvents(mockEvents, mockConfigNoBreak)
          .length
      ).toEqual(mockNbWeek);
      done();
    });
  });
});
