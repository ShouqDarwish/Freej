
const getAllItems = require('./controller').getAllItems;
const createPost = require('./controller').createPost;
const itemAPI = (app) => {

  // get all items
  app.get('/api/item/all', (req, res) => {
      console.log('get all items will be called');
    getAllItems().then(
      result => { res.send(result); },
      error => { res.send({ error }); }
    );
  });
  

  //post an item
  app.post('/api/item/create', (req, res) => {
    var title = req.param('title');
    var description = req.param('description');
    console.log(title+" "+description);
    //function to insert into db
    createPost(title, description);
  });

};

module.exports = itemAPI;
