import defaultConfig from 'config/environments/default';

const configuration = {
    ...defaultConfig,
    CONFIG_NAME: 'Production Config',
    MAIN_APP_AUTHORITY: 'https://salty-crag-16434.herokuapp.com',
};

export default configuration;
