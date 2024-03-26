// import express from 'express'-alternate method
const express=require('express')
const app=express()
// app->filename

const PORT=3500
const userRoute=require('./routes/userRoute')

app.get('/',(request,response) => {

    response.status(200).send({message:"Hello World"})
})

//1.file_name.get(route,arrow_function)
// 2.file_name.listen(port)
//3.file_name.use(route,imported_variable_name)

app.get('/greet',(request,response) => {

    response.status(200).send({page:'/greet',message:"Good Morning"})
})

// status(200)-statuscode 

// app.get('/api/v1/users',(request,response) => {

//     response.status(200).send({name:"abc",age:20},{name:"abc",age:29})
// })

app.use('/api/v1/users',userRoute)

app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

// app.get('/') landing page 