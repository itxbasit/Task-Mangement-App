import express from 'express'
import mongoose from 'mongoose';
import Task from '../Schema/taskSchema.js'

const router = express.Router()

router.post("/", async (req, res) => {
    try{
        const {email, id} = req.body;
        const unsetResult = await Task.updateOne(
            { email: email },
            {
              $unset: {
                [`taskDetails.${id}`]: 0,
              },
            }
          );
        
          console.log('Unset result:', unsetResult);
        
          // Step 2: Use $pull to remove the null element from the array
          const pullResult = await Task.updateOne(
            { email: email },
            {
              $pull: {
                taskDetails: null,
              },
            }
          );
        
          console.log('Pull result:', pullResult);
        return res.status(200).send({status: 200, message: pullResult})
    }
    catch(err){ 
        return res.status(400).send({status: 400, message: err.message})
    }

});


export default router;
