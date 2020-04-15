'use strict'

const stations = require('./stations')
const regions = require('./regions')
const journeys = require('./journeys')
const { departures, arrivals } = require('./timetable')
const trip = require('./trip')

module.exports = {
	stations,
	regions,
	journeys,
	departures, arrivals,
	trip,
}
