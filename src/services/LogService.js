import * as Sentry from '@sentry/browser';

function init() {
   // Sentry.init({dsn: "https://d0e5c777e38b4865a9c76567ab05fe96@sentry.io/1457382"});
}

function log(error) {
    // Sentry.captureException(error);
    console.log('httpService.error', error);
}

export default {
    init,
    log
}