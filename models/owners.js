const fs = require('fs');
module.exports = {
  create (data, cb) {
      
  },
  fetchAll (cb) {
    fs.readdir('./data/owners', (err, data) => {
      data.forEach(file =>{
        fs.readFile(`./data/owners/${file}`, 'utf8', (err, fileContents) => {
          fs.appendFile('./data/owners/allOwners', fileContents, (err,data) => {
            if(err) console.log('ERROR!');
          });
        });
      });
    });
    fs.readFile('./data/owners/allOwners', 'utf8', (err, data) => {
      if(err) console.log('ERROR!');
    });
  },
  fetchById (id, cb) {
        
  },
  update (id, data, cb) {

  },
  deleteById (id, cb) {

  }
};