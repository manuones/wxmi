var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/xi',function (req, res) {
    res.send('hello');
});
router.get('/reg',function (req,res) {
    res.send('hello');
});



router.post('/login',function (req,res) {
    console.log(req.body)
    var a1=req.body.a
    var b1=req.body.b
    var c=a1+b1
    console.log(a1+b1)

    res.send((a1+b1).toString())//data需要转换为string
});
router.get('/post',function (req,res) {
    res.render('post',{title:'发表'})
});
router.post('/post',function (req,res) {

});
router.get('/logout',function (req,res) {

});
module.exports = router;

// module.exports=function (app) {
//     app.get('/',function (req,res) {
//         res.render('index',{title:'Express'})
//     })
// }
