const travelData=require('../models/Travel')
// to get all plan
const getPlans=async(req,res)=>{

    try {
        console.log('hi');
        const plans=await travelData.find()
        console.log(plans)
        res.status(200).json(plans)
        
    } catch (error) {

        res.status(500).json({error:error.message})
        
    }

}
//get plan by id
const getPlanById=async(req,res)=>{
    try {
        
        const planId=req.params.id
        const plan=await travelData.findById(planId)
        if(!plan)
            return res.status(404).json({message:'plan not found'})
          res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}
//create-post
const createPlan=async(req,res)=>{

    try {
      
        const {destination,startDate,endDate,activities}=req.body
        const newPlan=new travelData({destination,startDate,endDate,activities})
        await newPlan.save()

        res.status(201).json(newPlan)
               
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

//update-patch
const updatePlan=async(req,res)=>{
    try {
        const planId=req.params.id
        const plan =await travelData.findByIdAndUpdate(planId,req.body,{new:true})
        if(!plan)return res.status(404).json({message:'plan not found'})
        res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

//delete

const deletePlan=async(req,res)=>{
try {

    const planId=req.params.id
    const plan=await travelData.findByIdAndDelete(planId)
    if(!plan)return res.status(404).json({message:'plan not found'})
        res.status(200).json({message:"plan delete successfully"})
    
} catch (error) {
    res.status(500).json({error:error.message})
    
}
}





module.exports={getPlans,getPlanById,createPlan,updatePlan,deletePlan}