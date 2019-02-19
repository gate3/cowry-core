const awilix = require('awilix');
const container = awilix.createContainer();

const initialize = _ => (
    container.loadModules([
        [
            './src/models/**/*.model.js',
            {
                register: awilix.asValue,
                lifetime: awilix.Lifetime.SINGLETON
            }
        ],
        [
            './src/helpers/**/*.helper.js',
            {
                register: awilix.asClass,
                lifetime: awilix.Lifetime.SINGLETON
            }
        ],
        [
            './src/controllers/**/*.ctrl.js',
            {
                register: awilix.asFunction,
            }
        ]
    ],
    {
        formatName:'camelCase',
    })
);

module.exports = {
    awilix,
    container,
    initialize
};