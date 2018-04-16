
const getAllItems = require('./controller').getAllItems;

const itemAPI = (app) => {

  // get all items
  app.get('/api/item/all', (req, res) => {
      console.log('get all items will be called');
    getAllItems().then(
      result => { res.send(result); },
      error => { res.send({ error }); }
    );
  });

};

module.exports = itemAPI;
