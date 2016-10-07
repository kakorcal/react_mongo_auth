module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {database: 'react_mongo_auth'},
    migrations: {directory: './server/db/migrations'},
  }
};
