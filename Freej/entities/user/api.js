
const userController = require('./controller')

const userAPI = (app) => {

  // * Get User * 
  app.get('/api/user/getUser', (req, res) => {
  	userController.getUser(req.params.user_id).then(
      result => { res.send(result); },
      error => { res.send({ error }); }
    );
  });

//   // * Get Users * TBD
//   app.get('/api/user/getUsers', (req, res) => {});

};

module.exports = userAPI;
