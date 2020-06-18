const express = require('express');
const businessRoutes = express.Router();
let mongoose = require('mongoose')

let Business = require('./business.model');

//store
businessRoutes.route('/add').post(function(req,res){
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business is added sucessfully'});
        })
        .catch(err => {
            res.status(400).send('unable to save business to database');
        });
});

//get data
businessRoutes.route('/').get(function (req,res){
    Business.find(function(err,business){
        if(err)
            console.log(err);
        else{
            res.json(business);
        }
    });
});

businessRoutes.route('/:id').get(function (req,res){
    Business.findById(req.params.id, function (err, business){
        if(err)
            console.log(err);
        else{
            res.json(business);
        }
    });
});

//Update
businessRoutes.route('/update/:id').post(function (req,res){
    Business.findById(req.params.id, function(err, business){
        if(!business)
            res.status(404).send('Data is not found.')
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.nic_no = req.body.nic_no

            business.save().then(business => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send('Unable to update database')
            });
        }
    });
});

//Delete
businessRoutes.route('/delete/:id').delete(function (req,res){
    Business.findByIdAndRemove({_id: req.params.id}, function (err, business){
        if(err)res.json(err);
        else res.json('Succesfully Removed');   
    });
});

module.exports = businessRoutes;