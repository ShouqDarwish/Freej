
const getAllItems = require('./controller').getAllItems;
const createPost = require('./controller').createPost;

const itemAPI = (app) => {


  //* Create an item * (Should be updated as per schema)
  // app.post('/api/item/create', (req, res) => {
  //   var title = req.param('title');
  //   var description = req.param('description');
  //   console.log(title+" "+description);
  //   //function to insert into db
  //   createPost(title, description);
  // });

  // * Get an item * TBD
  // app.get('/api/item/:item_id',(req, res) => { });

   // * Update an item * (Might Not be needed)
  // app.get('/api/item/update',(req, res) => { });

  // * Delete an item * TBD
  // app.delete('/api/item/delete',(req, res) => { });


  // * Get all items * (Should be updated as per schema)
  // app.get('/api/item/all', (req, res) => {
  //     console.log('get all items will be called');
  //   getAllItems().then(
  //     result => { res.send(result); },
  //     error => { res.send({ error }); }
  //   );
  // });

};

module.exports = itemAPI;
