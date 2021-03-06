const express=require('express');
const res = require('express/lib/response');
const router=express.Router();
const { ensureAuthenticated } = require('../config/auth');

//welcome
router.get('/',(req, res)=> res.render('welcome'));

//Dashboard
router.get('/dashboard',ensureAuthenticated,(req, res)=> res.render('dashboard', {
    name: req.user.name
}));
 
module.exports= router;