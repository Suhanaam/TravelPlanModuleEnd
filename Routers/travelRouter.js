const express=require('express')
const travelRouter=express.Router()
const {getPlans,getPlanById,createPlan,updatePlan,deletePlan}=require('../controllers/travelController')

//get all plan
travelRouter.get('/',getPlans)

//get plan by id
travelRouter.get('/:id',getPlanById)

//create plan
travelRouter.post('/',createPlan)

//update plan
travelRouter.patch('/:id',updatePlan)

//delete plan

travelRouter.delete('/:id',deletePlan)


//localhost:3001/plans


module.exports=travelRouter