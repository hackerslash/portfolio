---
id: building-a-rest-api-with-node
title: Building a REST API with Node.js and Express
date: 2024-05-05
author: Md Afridi Sk
excerpt: Learn how to create a RESTful API using Node.js and Express with MongoDB integration.
---

# Building a REST API with Node.js and Express

<img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686461/cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png" alt="Mountain landscape" width="100%" />

In this tutorial, we'll build a RESTful API using Node.js and Express, with MongoDB as our database.

## Setting Up the Project

First, let's create a new project and install the necessary dependencies:

```bash
mkdir node-rest-api
cd node-rest-api
npm init -y
npm install express mongoose dotenv
```


## Creating the Server

Let's create a basic Express server in `server.js`:

```javascript
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to our API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Creating a Model

Let's create a simple User model in `models/User.js`:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

## Creating Routes

Now, let's create routes for our API in `routes/users.js`:

```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one user
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Create a user
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get user by ID
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id).select('-password');
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
```

## Integrating Routes with Server

Finally, let's integrate our routes with the server:

```javascript
// In server.js
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);
```

## Conclusion

<img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="Mountain landscape" width="100%" />

We've built a basic RESTful API using Node.js, Express, and MongoDB. This API allows you to create, read, update, and delete users. You can extend this API by adding more routes and models as needed.
