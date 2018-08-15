# events-calendar-csv-generator

Script to generate an easy csv file to import into the Events Calendar plugin.
It will generate recurring events based on the number of specified weeks with or
withouts break time in the middle.

## To Execute

1. Specify events (first week that will be repeated every week) and general
   config in the config.js
2. Generate csv file `npm start` or `node src/index.js`
3. You can now import generated csv file to the Event Calendar plugin

## To Test

`npm run test`
