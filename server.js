import express from 'express';
import morgan from 'morgan'; 
import cors from 'cors';
import { config } from 'dotenv';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    try {
        res.json({ message: 'Hello World!' });
    }
    catch (error) {
        res.json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

