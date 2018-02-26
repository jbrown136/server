const fs = require('fs');
module.exports = {
  create (ownerId, data, cb) {
      
  },
  fetchById (id, cb) {
        
  },
  fetchByOwnerId (ownerId, cb) {
    const pets = [];
    let count = 0;
    fs.readdir("./data/pets", (err, data) => {
      data.forEach((file, i) => {
        fs.readFile(`./data/pets/${file}`, "utf8", (err, fileContents) => {
          pets[i] = JSON.parse(fileContents);
          for (let j = count; j < data.length; j++) {
            if (pets[j] === undefined) return;
            count++;
          }
          cb(null, pets.filter(pet => pet.owner === `${ownerId}`));
        });
      });
    });
  },
  deleteById (id, cb) {

  }
};