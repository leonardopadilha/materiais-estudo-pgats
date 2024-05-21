exports.config = {
    user: 'user-browserstack',
    key: 'key-browserstack',
    hostname: 'hub.browserstack.com',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        'bstack:options': {
            'deviceName': 'Samsung Galaxy S22 Ultra',
            'platformVersion': '12.0',
            'platformName': 'android'
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['browserstack', {
            app: 'link-gerado-pelo-browserstack-apos-upload',
            buildName: 'browserstack build',
            testObservability: false,
            testObservabilityOptions: {
                user: '',
                key: ''
            },
            browserstackLocal: false
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
