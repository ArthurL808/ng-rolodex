const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    return req.db.Contact.fetchAll()
      .then(results => {
      return res.json(results);
      })
      .catch(err => {
        console.log(err);
      });
  });

router.get("/search/:term", (req,res)=>{
   return req.db.Contact.where('name','LIKE', `${req.params.term}%`).fetchAll().then(results =>{
    return res.json(results)
   }).catch(err =>{
       console.log(err)
   })
})

router.get("/:id",(req,res)=>{
    return req.db.Contact.where({id: `${req.params.id}`}).fetch().then(results =>{
        return res.json(results)
    }).catch(err =>{
        console.log(err)
    })
})
  module.exports = router