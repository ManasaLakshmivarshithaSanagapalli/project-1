// app.js
// App.js
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const mongoose = require('./src/config/db');  // Import the db.js file to establish the connection

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Import Mongoose schemas
const CompaniesSchema = require('./src/models/companiesSchema');
const Login = require('./src/models/login');
// const Students=require('./src/models/students');
const students = require('./src/models/students');

// API routes
app.post('/api/postData', upload.single('logoUrl'), async (req, res) => {
    const { CompanyName, description, eligibility, packageoffered, applied, role } = req.body;
    const newCompany = new CompaniesSchema({
        CompanyName,
        description,
        eligibility,
        packageoffered,
        applied,
        role
    });

    try {
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving company data' });
    }
});

app.get('/api/getData', async (req, res) => {
    try {
        const companies = await CompaniesSchema.find();
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving companies data' });
    }
});

// API for user login
// app.post('/api/CheckUser', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await Login.findOne({ email });

//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error('Error during user login:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
// app.post('/api/CheckUser', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         let user = await Login.findOne({ email });

//         if (!user) {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             user = new Login({ email, password: hashedPassword });
//             await user.save();
//             return res.status(201).json({ message: 'User registered successfully' });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error('Error during user login:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
// app.post('/api/CheckUser', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         let user = await Login.findOne({ email });

//         if (!user) {
//             // If user does not exist, register them
//             const hashedPassword = await bcrypt.hash(password, 10);
//             user = new Login({ email, password: hashedPassword });
//             await user.save();
//             return res.status(201).json({ message: 'User registered successfully' });
//         }

//         // If user exists, validate password
//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error('Error during user login:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
app.post('/api/CheckUser', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await Login.findOne({ email });

        if (!user) {
            // If user does not exist, register them
            const hashedPassword = await bcrypt.hash(password, 10);
            user = new Login({ email, password: hashedPassword });
            await user.save();
            return res.status(201).json({ message: 'User registered successfully' });
        }

        // If user exists, validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Determine the user type based on email domain
        const userType = email.endsWith('@aec.edu.in') ? 'user' : 'admin';

        res.status(200).json({ message: 'Login successful', userType });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// const AZURE_ENDPOINT = 'https://eastus.api.cognitive.microsoft.com/text/analytics/v3.0/sentiment';
// const AZURE_SUBSCRIPTION_KEY = '55cf525a-dade-4a91-b408-e3ef72ee0343';
// app.post('/analyze-sentiment', async (req, res) => {
//     const { text } = req.body;
    
//     try {
//         const response = await axios.post(
//             AZURE_ENDPOINT,
//             {
//                 documents: [
//                     {
//                         id: '1',
//                         text: text,
//                     },
//                 ],
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Ocp-Apim-Subscription-Key': AZURE_SUBSCRIPTION_KEY,
//                 },
//             }
//         );

//         const sentiment = response.data.documents[0].sentiment;
//         res.json({ sentiment });
//     } catch (error) {
//         console.error('Error analyzing sentiment:', error);
//         res.status(500).json({ error: 'Failed to analyze sentiment' });
//     }
// });

// Start the server after ensuring the database connection is established
// app.get('/api/csvData', async (req, res) => {
//     try {
//         const data = await PlacedStudents.find().lean();
//         const csvData = data.map(entry => ({
//         id: String,
//     roll_number: String,
//     admission_no:String,
//     student_name:String,
//     college:String,
//     branch:String,
//     passout_Year:String,
//     ssc_percent:String,
//     inter_percent:String,
//     diploma_percent:String,
//     btech_percent:String,
//     backlogs:String,
//     date_of_birth:String,
//     blood_group:String,
//     category:String,
//     nationality:String,
//     religion:String,
//     mother_tongue:String,
//     entrance_type:String,
//     rank:String,
//     joining_date:String,
//     seat_type:String,
//     admission_type:String,
//     mobile:String,
//     email:String,
//     official_mail:String,
//     scholarship:String,
//     phc:String,
//     father_name:String,
//     annual_income:String,
//     mother_name:String,
//     mother_mobile_no:String,
//     identification_marks:String,
//     corresponding_address:String,
//     permanent_address:String,
//             // Add more fields as needed
//         }));
//         res.json(csvData);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
// app.get('/api/csvData', async (req, res) => {
//     try {
//       const data = await students.find();
//       res.json(data);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
app.get('/api/csvData', async (req, res) => {
    try {
      const data = await students.find();
      console.log('Data fetched:', data); // Log fetched data
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: error.message });
    }
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
mongoose.connection.once('open', () => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

app.get('/', (req, res) => {
    res.json({ message: 'API Working' });
});
