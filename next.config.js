const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
        };
    }

    console.log(process.env.customKey);
    return {
        /* config options for all phases except development here */
        env: {
            customKey: 'my-value'
        }
    };
};
