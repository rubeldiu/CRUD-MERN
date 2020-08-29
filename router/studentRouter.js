const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")


router.post('/createstudent',(req,res)=>{
    const {name,email,address} = req.body 
    if(!email || !address || !name){
       return res.status(422).json({error:"please add all the fields"})
    }
    Student.findOne({email:email})
    .then((savedStudent)=>{
        if(savedStudent){
          return res.status(422).json({error:"user already exists with that email"})
        }
       const student = Student({
           name,
           email,
           address
       })
       student.save()
       .then(student=>{
           res.json({message: 'Saved Successfully'});
       })
       .catch(err=>{
           console.log(err);
       })

    })
    .catch(err=>{
        console.log(err);
    })
  })

router.get('/getall',(req,res)=>{
    Student.find()
    .then(students=>{
        res.json({students})
    }).catch(err=>{
        console.log(err)
    })
}) 

router.get('/getstudent/:email',(req,res)=>{
    // const {email}=req.body;
    // Student.findOne({email:email})
    // .then(student=>{
    //     if(student){
    //         res.json(student)
    //     }
    //     else{
    //         return res.status(422).json({error:'Student not found'})
    //     }
    // }).catch(err=>{
    //     console.log(err)
    // })
  const {email} =req.params;
  Student.findOne({email}).exec((err,student)=>{
      if(err) console.log(err);
      res.json(student);
  });
    
})

router.put('/updatestudent/:email',(req,res)=>{
    // const {name,email,address}=req.body;
    // Student.findOneAndUpdate({email},{name,address},{new:true})
    //     .exec((err,student)=>{
    //         if(err) console.log(err)
    //         res.json(student)
    //     }
        
    //     );
    const {email} =req.params;
    const {name,address}=req.body;
    Student.findOneAndUpdate({email},{name,address},{new:true})
         .exec((err,student)=>{
             if(err) console.log(err)
             res.json(student);
         })

})

router.delete('/deletestudent/:email',(req,res)=>{
    // Student.findOneAndRemove({_id:req.params.id},(err,student)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.json({message:'Delete Successfully!!'})
    //     }
    // })
    const {email} =req.params;
    Student.findOneAndRemove({email}).exec((err,student)=>{
        if(err){
            console.log(err)
        }else{
            res.json({message:'Delete Successfully!!'})
        }
    })
    
   
})
  module.exports = router
