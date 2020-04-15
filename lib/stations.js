'use strict'

const csv = require('tiny-csv')
const merge = require('lodash/merge')
const fetch = require('./fetch')
const intoStream = require('into-stream').object
const {
	normalizeEmpty: m,
	parseStation,
	parseCountry: formatCountry,
} = require('./util')

const defaults = {
}

const createStation = (station) => {
	const res = parseStation(station)
	return {
		...parseStation(station),
		slug: m(station.slugs),
		aliases: (station.aliases ? csv(station.aliases) : null),
		regions: [m(station.city_id + '')].filter((x) => !!x),
		connections: m(station.pairs),
	}
}

const allAsync = async (opt) => {
	const options = merge({}, defaults, opt)
	const results = await fetch('network.json', opt)
	return results.stations.map(createStation)
}

const all = (opt = {}) => {
	return intoStream(allAsync(opt))
}
all.features = { // required by fpti
	...fetch.features,
}

module.exports = { all }
