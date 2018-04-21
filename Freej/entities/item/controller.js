const Item = require('./model');

const getAllItems = () => {
    console.log('getAllItems function body 1');
   
    return new Promise((resolve, reject) => {
        console.log('getAllItems function body 2');
        Item.find()
        .lean()
        .exec((error, result) => {
         
          if (error) { console.log(error); reject(error); }
          else {
            console.log(result);
            resolve(result);
          }
    });

});
};


const createPost = (t, d) => {
    console.log('createPost function body 1');
    var i = new Item({title:t, description:d});
    i.save(function(err) {
    if(err) console.log('Error on save' + err);
    });

};


module.exports = {
    getAllItems,
    createPost
};
