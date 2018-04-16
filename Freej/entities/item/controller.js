const Item = require('./model');

const getAllItems = () => {
    console.log('getAllItems function body');
   
    // return new Promise((resolve, reject) => {
    //     Item.findAll()
    //     .lean()
    //     .exec((error, result) => {
    //       if (error) { console.log(error); reject(error); }
    //       else {
    //         console.log(result);
    //         resolve(result);
    //       }
    // });

    return new Promise((resolve, reject) => {
        Item.findAll(function (err, items) {
            if (err) 
                return handleError(err);
            resolve(items);
        })
    });


};
// });
// };


module.exports = {
    getAllItems
};
