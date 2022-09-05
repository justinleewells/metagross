const entities = require('./entities');

const assign = (list) => {
  return list.reduce((obj, entry) => {
    obj[entry.name] = entry.url;
    return obj;
  }, {});
}

module.exports = entities.reduce((obj, entity) => {
  const data = require(`${__dirname}/pokeapi/data/api/v2/${entity}`);
  obj[entity] = assign(data.results);
  return obj;
}, {});
