const fs = require("fs");
module.exports = {
  create(data, cb) {
    const newOwner = {
      id: data.id,
      name: data.name,
      age: data.age
    };
    fs.writeFile(
      `./data/owners/${data.id}.json`,
      JSON.stringify(newOwner),
      err => {
        cb(null);
      }
    );
  },
  fetchAll(cb) {
    const owners = [];
    let count = 0;
    fs.readdir("./data/owners", (err, data) => {
      data.forEach((file, i) => {
        fs.readFile(`./data/owners/${file}`, "utf8", (err, fileContents) => {
          owners[i] = JSON.parse(fileContents);
          for (let j = count; j < data.length; j++) {
            if (owners[j] === undefined) return;
            count++;
          }
          cb(null, owners);
        });
      });
    });
  },
  fetchById(id, cb) {
    fs.access(`./data/owners/${id}.json`, fs.constants.F_OK, err => {
      if (err) cb(err);
      else
        fs.readFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
          if (err)
            cb({
              message: `${id} does not exist`,
              status: 418
            });
          else cb(null, JSON.parse(data));
        });
    });
  },
  update(id, data, cb) {
    fs.access(`./data/owners/${id}.json`, fs.constants.F_OK, err => {
      if (err) cb(null, `${id} does not exist`);
      fs.readFile(`./data/owners/${id}.json`, "utf8", (err, ownerDetails) => {
        ownerDetails = JSON.parse(ownerDetails);
        const keys = Object.keys(data);
        keys.forEach(key => (ownerDetails[key] = data[key]));
        fs.writeFile(
          `./data/owners/${id}.json`,
          JSON.stringify(ownerDetails),
          err => {
            if (err) console.log("oh noooooo");
            cb();
          }
        );
      });
    });
  },
  deleteById(id, cb) {
    fs.access(`./data/owners/${id}.json`, fs.constants.F_OK, err => {
      if (err) cb(null, `${id} does not exist`);
      else {
        fs.readdir("./data/pets", (err, petArray) => {
          let count = 0;
          petArray.forEach(pet => {
            count++;
            fs.readFile(`./data/pets/${pet}`, (err, petData) => {
              petData = JSON.parse(petData);
              console.log(petData.owner);
              if (petData.owner === id) {
                fs.unlink(`./data/pets/${pet}`, err => {
                  if (err) console.log("oops!");
                });
              }
            });
            if (count === petArray.length) {
              fs.unlink(`./data/owners/${id}.json`, err => {
                if (err) console.log("cannot delete owner!");
                cb(null, "delete successful");
              });
            }
          });
        });
      }
    });
  }
};
