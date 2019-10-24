const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    return req.db.Contact.where('user_id', '=', `${req.user.id}`).fetchAll()
      .then(results => {
      return res.json(results);
      })
      .catch(err => {
        console.log(err);
      });
  });

router.get("/search/:term", (req,res)=>{
   return req.db.Contact.where('name','LIKE', `${req.params.term}%`).where('user_id', '=',`${req.user.id}`).fetchAll().then(results =>{
    return res.json(results)
   }).catch(err =>{
       console.log(err)
   })
})

router.get("/:id",(req,res)=>{
    return req.db.Contact.where({id: `${req.params.id}`}).fetch().then(results =>{
        return res.json(results)
    }).catch(err =>{
        console.log(err.message)
    })
})

router.post("/", (req,res)=>{
  return req.db.Contact.forge({
    name: `${req.body.name}`,
    address: `${req.body.address}`,
    mobile: `${req.body.mobile}`,
    work: `${req.body.work}`,
    home: `${req.body.home}`,
    email: `${req.body.email}`,
    github: `${req.body.github}`,
    user_id: `${req.user.id}`
  }).save().then(results=>{
    console.log(results)
    res.json(results)
  }).catch(err =>{
    console.log(err)
  })
})

router.put("/:id", (req,res)=>{
  return req.db.Contact.forge({id: `${req.params.id}`}).save({name: `${req.body.name}`,address:`${req.body.address}`,mobile:`${req.body.mobile}`,work:`${req.body.work}`,home:`${req.body.home}`,email:`${req.body.email}`,github: `${req.body.github}`}).then(results =>{
    res.json(results)
  }).catch(err =>{
    console.log(err)
  })
})

router.delete('/:id', (req,res)=>{
  console.log('hit')
  return req.db.Contact.forge({id: `${req.params.id}`}).destroy().then(results =>{
    res.json(results)
  })
})

  module.exports = router