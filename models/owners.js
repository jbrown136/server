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
    fs.readFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
      cb(null, JSON.parse(data));
    });
  },
  update(id, data, cb) {},
  deleteById(id, cb) {}
};
