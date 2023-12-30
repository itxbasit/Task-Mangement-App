import express from 'express';
import TaskSchema from '../Schema/taskSchema.js'

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const taskData = (req.body)
        console.log(taskData)
        await TaskSchema.findOneAndUpdate(
            { email: taskData.email },
            {
                $addToSet: {
                    'taskDetails': taskData.taskDetails,
                  },
            },
            { upsert: true, new: true, runValidators: true  },
        )
        return res.status(200).send({ status: 200, message: "Task added successfully" })
    }
    catch (err) {
        return res.status(400).send({ status: 400, message: err.message })
    }
})

export default router;