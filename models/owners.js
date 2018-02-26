const fs = require("fs");
module.exports = {
  create(data, cb) {},
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
    fs.access(`./data/owners/${id}.json`, fs.constants.F_OK, (err) => {
      if(err) cb(null, `${id} does not exist`);
      fs.readFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
        if(err) console.log("ERROR!");
        cb(null, JSON.parse(data));
      });
    });
  },
  update(id, data, cb) {},
  deleteById(id, cb) {}
};
