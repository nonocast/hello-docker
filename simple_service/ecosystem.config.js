module.exports = {
	apps: [{
		name: 'service',
		script: 'src/index.js',
		instances: 'max',
		autorestart: true,
		'max_restarts': 3,
		'min_uptime': 300,
		watch: false,
		max_memory_restart: '2G',
		env: {
			DEBUG: 'app*',
			NODE_ENV: 'production'
		},
		env_production: {
			DEBUG: 'app*',
			NODE_ENV: 'production'
		},
		env_test: {
			DEBUG: 'app*',
			NODE_ENV: 'test'
		}
	}]
};
