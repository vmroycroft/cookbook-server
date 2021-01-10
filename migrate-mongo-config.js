require('dotenv').config();

const config = {
  mongodb: {
    url: process.env.DB_URL,
		databaseName: "cookbook",
		options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js"
};

module.exports = config;
