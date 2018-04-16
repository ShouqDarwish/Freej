const express = require('express');
const bodyParser = require('body-parser');
var mongojs = require('mongojs');


const itemRouter = express.Router();

var db = mongojs("extensionList",["extensionList"]);

// contactRouter.use(bodyParser.json());


// contactRouter.route('/')
// .all((req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     next();
// })
// .get((req,res,next) => {
   
//    // res.write('Here are all the contacts!');
//         db.extensionList.find(function(err,docs){
//         res.json(docs);
//     })  
// })
// .post((req, res, next) => {
//    // res.write('Will add the contact: ' + req.body.name + ' with details: ' + req.body.email + ' '+ req.body.extension);
//     db.extensionList.insert(req.body, function(err,doc){
//         res.json(doc);
//     });
// })
// .put((req, res, next) => {
//     res.statusCode = 403;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('PUT operation not supported on /contactList');
// })
// .delete((req, res, next) => {
//     var id = req.params.empId;
//     db.extensionList.remove({_id:mongojs.ObjectId(id)}, function(err,doc){
// 	res.json(doc)
//     res.end('Deleting all contacts');
// })
// });




// contactRouter.route('/:empId')
// .all((req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     next();
// })
// .get((req,res,next) => {
//     //res.end('Will send details of the employee: ' + req.params.empId +' to you!');
//     var id = req.params.empId;
//     db.extensionList.findOne({_id:mongojs.ObjectId(id)}, function(err,doc){
// 	res.json(doc)
// 	});
// })
// .post((req, res, next) => {
//     res.statusCode = 403;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('POST operation not supported on /contactList/'+ req.params.empId);
// })
// .put((req, res, next) => {
//     res.write('Updating employee: ' + req.params.empId + '\n');
//     res.write('Will update the employee: ' + req.body.name + 
//         ' with details: ' + req.body.email + ' '+ req.body.extension);

//     var id = req.params.empId;
//     db.extensionList.findAndModify({query: {_id:mongojs.ObjectId(id)},
//         update:{$set:{name: req.body.name, email: req.body.email, extension: req.body.extension}}, new: true}
//     , function(err,doc){
//         res.json(doc);
//     });
// })
// .delete((req, res, next) => {
//     res.end('Deleting employee: ' + req.params.empId);
// });


// module.exports = contactRouter;