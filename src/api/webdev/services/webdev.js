'use strict';

/**
 * webdev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webdev.webdev');
