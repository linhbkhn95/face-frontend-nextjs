// const express = require('express');

// const router = express.Router();

// module.exports = router;
const routes = require('next-routes')
// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
    .add('about') // about  about     /about
    .add('login', '/sigin', 'login') //
