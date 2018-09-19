const plugins = [];

plugins.push(
    require('./htmlPlugin'),
    require('./extractPlugin'),
    require('./providePlugin')
);

module.exports = plugins