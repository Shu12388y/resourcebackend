// const fs = require('fs');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'ep-crimson-salad-a5jnddar.us-east-2.aws.neon.tech'),
//       port: env.int('DATABASE_PORT', 20184),
//       database: env('DATABASE_NAME', 'reourcecms'),
//       user: env('DATABASE_USERNAME', 'reourcecms_owner'),
//       password: env('DATABASE_PASSWORD', 'ELK2c9zJgYbp'),
//       ssl:env.bool('DATABASE_SSL', false),
//     },
//   },
// });



module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA'), 
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
 
});