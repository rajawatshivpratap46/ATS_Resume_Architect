import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

/*
=================================
MIDDLEWARES
=================================
*/

// Parse JSON 
app.use(express.json());

// Parse Form Data
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Logger
app.use(morgan("dev"));

/*
=================================
HEALTH CHECK ROUTE
=================================
*/

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "CareerForge Pro API is running!",

    });
});

export default app;