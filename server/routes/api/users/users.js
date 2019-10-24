const express = require('express');
const router = express.Router();

router.get('/profile',(req,res)=>{
    return req.db.User.where({id: `${req.user.id}`}).fetch().then(results =>{
        return res.json(results)
    }).catch(err =>{
        console.log(err)
    })
})

router.put('/', (req,res)=>{
    return req.db.User.forge({id: `${req.body.id}`}).save({name: `${req.body.name}`,username:`${req.body.username}`,email: `${req.body.email}`, address: `${req.body.address}`}).then(results =>{
        console.log(results)
        res.json(results)
    }).catch(err =>{
        console.log(err)
    })
})

module.exports = router