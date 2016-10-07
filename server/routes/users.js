import express from 'express'
import validateInput from '../shared/validations/signup'
import User from '../db/models/user'
import bcrypt from 'bcrypt'

let router = express.Router();

router.post('/', (req, res)=>{
  const {errors, isValid} = validateInput(req.body);

  if(isValid){
    const {username, password} = req.body;

    res.send('Create New User');
  }else{
    res.status(400).json(errors);
  }
});

export default router