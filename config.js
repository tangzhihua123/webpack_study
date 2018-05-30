module.exports = {
	dev: {
		env: {
			NODE_ENV: JSON.stringify('development'),
		},
		port: 8888,
		proxyTable: {},
	},
	mock: {
		env: {
			NODE_ENV: JSON.stringify('mock'),
		}
	},
	product: {
		env: {
			NODE_ENV: JSON.stringify('product'),
		}
	}
}