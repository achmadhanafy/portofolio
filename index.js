const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}))

//import folder public
app.use('/public',express.static(__dirname +'/public'))

//template engine hbs
app.set('view engine','hbs')

//Index page
app.get('/',(req,res)=>{
    res.render('index')
})

//Contact me page
app.get('/contact-me',(req,res)=>{
    res.render('contact-me')
})

//contact page
app.get('/contact',(req,res)=>{
    res.render('contact')
})

//aboutme page
app.get('/about',(req,res)=>{
    res.render('about')
})

//Submit contact me
app.post('/contact-me', function (req,res){
    let emailReceiver = 'achmadhanafy@gmail.com'
    let name = req.body.name
    let phoneNumber = req.body.phoneNumber
    let subject = req.body.subject
    let message = req.body.message

    res.redirect(`mailto:${emailReceiver}?subject=${subject}&body= Hello my name ${name} . ${message}. Please contact me on ${phoneNumber}`)
})

const port = 5000;
app.listen(port, function(){
    console.log(`server run on port ${port}`);
})