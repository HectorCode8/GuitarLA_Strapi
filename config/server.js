module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6174d0f8ec4dd0e54bf4dbf9b0a9ad2f'),
    },
  },
});
