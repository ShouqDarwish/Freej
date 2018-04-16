
const getAllItems = require('./controller').getAllItems;

const itemAPI = (app) => {

  // get all items
  app.get('/api/item/all', (req, res) => {
    getAllItems().then(
      result => { res.send(result); },
      error => { res.send({ error }); }
    );
  });

};

module.exports = itemAPI;
