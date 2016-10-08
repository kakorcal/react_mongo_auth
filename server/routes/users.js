import express from 'express'
import validateInput from '../shared/validations/signup'
import User from '../db/models/user'
import bcrypt from 'bcrypt'

let router = express.Router();

router.post('/', (req, res)=>{
  const {errors, isValid} = validateInput(req.body);

  if(isValid){
    const {username, password} = req.body;
    var plainTextPassword = password;
    
    bcrypt.genSalt(10, (err, salt) => {
      if(err) res.status(500).json({error: err});

      bcrypt.hash(plainTextPassword, salt, (err, password) => {
        User.forge({
          username, password
        }, {hasTimestamps: true}).save()
        .then(user => res.json({success: true}))
        .catch(err => res.status(500).json({error: err})); 
      });
    });
  }else{
    res.status(400).json(errors);
  }
});

export default router