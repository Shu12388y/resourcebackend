'use strict';

/**
 * webdev router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::webdev.webdev');
