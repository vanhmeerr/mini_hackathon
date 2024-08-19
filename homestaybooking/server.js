const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// User schema and model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Users = mongoose.model('Users', userSchema);

// Route to handle login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'No user found with this email.' });
        }

        // Check if passwords match (without hashing)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }

        res.json({ message: 'Login successful!', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// Endpoint to register a new user (for testing purposes)
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new Users({ email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
