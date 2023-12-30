import express from 'express'
import SignUp from './signUp.js'
import SignIn from './SignIn.js'
import Search from './searchByID.js'
import changePass from './update.js'
import Task from './task.js'
import TaskSearch from './search.js'
import Delete from './delete.js'
import Edit from './edit.js'

const router = express.Router()


router.use('/SignUp', SignUp)
router.use('/SignIn', SignIn)
router.use('/Search', Search)
router.use('/changePass', changePass)
router.use('/task', Task)
router.use('/TaskSearch', TaskSearch)
router.use('/Delete', Delete)
router.use('/Edit', Edit)

export default router