const mongoose=require('mongoose');
const dotenv = require('dotenv');


dotenv.config({path:'./.env'})

const app = require('./app');

const DB = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

/* CONNECT TO DB */
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected...."));

  const port = process.env.PORT || 5000;

  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });

  process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection!!!  Shutting down.....');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });