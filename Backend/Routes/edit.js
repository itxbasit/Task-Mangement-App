import express from 'express'
import mongoose from 'mongoose';
import Task from '../Schema/taskSchema.js'

const router = express.Router()

router.post("/", async (req, res) => {
    try{
        const {email, id, taskDetails} = req.body;
        const result = await Task.updateOne(
            { email: email, [`taskDetails.${id}`]: { $exists: true } },
            {
              $set: {
                [`taskDetails.${id}`]: taskDetails,
              },
            }
          );
        return res.status(200).send({status: 200, message: result})
    }
    catch(err){ 
        return res.status(400).send({status: 400, message: err.message})
    }

});


export default router;
