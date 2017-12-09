const utils = require('./utils');

describe('utils', () => {
  describe('isDateLower', () => {
    it('should return true if first date is lower then second date', done => {
      expect(utils.isDateLower('2018-01-08', '2018-01-09')).toEqual(true);
      expect(utils.isDateLower('2018-01-08', '2018-02-08')).toEqual(true);
      expect(utils.isDateLower('2018-01-08', '2019-02-08')).toEqual(true);
      done();
    });
    it('should return false if first date is greater or equals to second date', done => {
      expect(utils.isDateLower('2018-01-09', '2018-01-08')).toEqual(false);
      expect(utils.isDateLower('2018-01-08', '2018-01-08')).toEqual(false);
      done();
    });
  });

  describe('isDateBetween', () => {
    it('should return true if date is between dates', done => {
      expect(
        utils.isDateBetween('2018-01-08', '2018-01-05', '2018-01-09')
      ).toEqual(true);
      expect(
        utils.isDateBetween('2018-01-08', '2018-01-08', '2018-01-09')
      ).toEqual(true);
      expect(
        utils.isDateBetween('2018-01-08', '2018-01-04', '2018-01-08')
      ).toEqual(true);
      done();
    });
    it('should return false if date is not between dates', done => {
      expect(
        utils.isDateBetween('2018-01-09', '2018-01-05', '2018-01-08')
      ).toEqual(false);
      expect(
        utils.isDateBetween('2018-01-01', '2018-01-05', '2018-01-08')
      ).toEqual(false);
      done();
    });
  });

  describe('addDays', () => {
    it('should return correct date', done => {
      expect(utils.addDays('2018-01-08', 2)).toEqual('2018-01-10');
      expect(utils.addDays('2018-01-08', 25)).toEqual('2018-02-02');
      expect(utils.addDays('2018-01-08', 0)).toEqual('2018-01-08');
      expect(utils.addDays('2018-02-26', 14)).toEqual('2018-03-12');
      done();
    });
  });
});
