module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'wongames'),
        username: env('DATABASE_USERNAME', 'wongames'),
        password: env('DATABASE_PASSWORD', 'wongames123'),
        // host: env('DATABASE_HOST', 'ec2-44-209-158-64.compute-1.amazonaws.com'),
        // port: env.int('DATABASE_PORT', 5432),
        // database: env('DATABASE_NAME', 'd10i5smc6ldq45'),
        // username: env('DATABASE_USERNAME', 'qzevmwzvtrozoi'),
        // password: env('DATABASE_PASSWORD', '9bf547df8bdd85f58e65f602b92b7e5bac295b12c1a3a74b5823b747e1bf4d0a'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
