require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.MONGO_URI,

    databaseName: 'tbstore',

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  migrationsDir: 'migrations',

  changelogCollectionName: 'changelog',

  migrationFileExtension: '.js',

  useFileHash: false,
}

module.exports = config
