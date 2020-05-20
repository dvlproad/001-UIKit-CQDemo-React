//
// /* config-overrides.js */
//
// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
// }


// /* config-overrides.js */
// const { override, fixBabelImports } = require('customize-cra');
// module.exports = override(
//     // fixBabelImports('import', {
//     //     libraryName: 'antd-mobile',
//     //     style: 'css',
//     // }),
// );


/* config-overrides.js */
const { useBabelRc, override } = require('customize-cra')

const config = override(useBabelRc())

module.exports = config