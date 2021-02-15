const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const helmet=require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const globalErrorHandler = require('./controllers/ErrorController');
const UsersRoute = require('./routes/UsersRoute');
const ToursRoute = require('./routes/ToursRoute');
const AppartsRoute = require('./routes/AppartsRoute');
const BookingsRoute = require('./routes/BookingRoutes')


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

//limits requests to app from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour!'
});
app.use('/api', limiter);

//BODY PARSER reading data from the body into req.body
app.use(express.json({ limit: '30mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '30mb' }))

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.options('*', cors());



//ROUTES
app.use('/api/ver1/user', UsersRoute);
app.use('/api/ver1/tour', ToursRoute);
app.use('/api/ver1/booking', BookingsRoute);
app.use('/api/ver1/appart', AppartsRoute);


if( process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, 'public')));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','builed','index.html'))
})
}


app.use(globalErrorHandler);
module.exports = app;

