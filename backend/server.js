import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongo.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'


const app = express()
const port = process.env.PORT || 4000



connectDB()
connectCloudinary()

app.use(express.json());
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman or server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // origin allowed
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req,res) => {
    res.send('API Working')
})

app.listen(port, () => console.log('Server Started: ', port))