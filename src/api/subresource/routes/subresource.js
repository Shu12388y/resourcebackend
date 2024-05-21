'use strict';

/**
 * subresource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::subresource.subresource');
