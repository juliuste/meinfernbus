'use strict'

const stations = require('./stations')
const regions = require('./regions')
const journeys = require('./journeys')
const { departures, arrivals } = require('./timetable')

module.exports = {
	stations,
	regions,
	journeys,
	departures, arrivals,
}
