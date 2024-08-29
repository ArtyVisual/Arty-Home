const express = require ("express")
const mongoose = require ('mongoose')
const cors = require("cors")
const TenantsModel = require('./models/Tenants')
const LandlordsModel = require('./models/Landlords')
const VPropertyModel = require("./models/VProperty")

const app =express()

const corsOptions = {
    origin: 'https://arty-home.vercel.app', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies or HTTP authentication
    optionsSuccessStatus: 204, // For legacy browser support
};

app.use(cors(corsOptions)); // Use CORS middleware
app.use(express.json())

app.options('*', cors(corsOptions)); // For all routes

mongoose.connect("mongodb+srv://abbasvajwana1:abbasatlas77@cluster1.0bhubyy.mongodb.net/rentDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB...", err));

// api for registering new properties

app.post('/P_Reg', (req, res) => {
        VPropertyModel.create(req.body)
            .then(vproperty => res.json(vproperty))
            .catch(err => {
                if (err.code === 11000) {
                    // Duplicate email error
                    res.json('same');
                } else {
                    // Other errors
                    res.status(500).json('An error occurred. Please try again later.');
                }
            });
});

app.get('/P_Fetch',(req,res)=>{
        VPropertyModel.find({})
        .then(vproperties => res.json(vproperties))
        .catch(err=>res.status(500).json("error"));
});

// api for tenant login and register

app.post('/T_Login', (req, res) => {
    const { email, password } = req.body;
    TenantsModel.findOne({ email: email })
        .then(user => 
            {
            if (user) 
            {
                if (user.password === password) 
                    {
                      res.json({ status: "success", user: { name: user.name, email: user.email } });
                    }
                    else
                    {
                        res.json("incorrect");
                    }
            }
            else
            {
                res.json("nouser");
            }
        });
});


app.post('/T_Register', (req, res) => {
    TenantsModel.create(req.body)
        .then(tenant => res.json(tenant))
        .catch(err => {
            if (err.code === 11000) {
                // Duplicate email error
                res.json('same');
            } else {
                // Other errors
                res.status(500).json('An error occurred. Please try again later.');
            }
        });
});

// api for lender login and register

app.post('/L_Login', (req, res) => {
    const { email, password } = req.body;
    LandlordsModel.findOne({ email: email })
        .then(user => {
            if (user)
            {
                if (user.password === password) 
                    {
                        res.json({ status: "success", user: { name: user.name, email: user.email } });
                    }
                else 
                    {
                        res.json("incorrect");
                    } 
            } 
            else
            {
                res.json("nouser");
            }
        });
});

app.post('/L_Register', (req, res) => {
    LandlordsModel.create(req.body)
        .then(landlord => res.json(landlord))
        .catch(err => {

            if (err.code === 11000) {
                res.json('same');
            } 
            else {
                res.status(500).json('An error occurred. Please try again later.');
            }

        });
});


app.listen(3001,()=>{
    console.log("server is running")
})
