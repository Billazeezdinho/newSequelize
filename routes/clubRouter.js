// import express and extract the router at once
const router = require('express').Router();
//import your function to your controller
const { createClub, getAll, getOneClub, updateClub, deleteClub } = require('../controllers/clubsController');

router.post('/club/', createClub);

router.get('/club', getAll);

router.get('/club/:id', getOneClub);

router.patch('/club/:id', updateClub);

router.delete('/club/:id', deleteClub)





module.exports = router;
 