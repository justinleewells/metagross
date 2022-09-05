const names = require('./names');
const entities = require('./entities');

const get = (entity) => {
  return (id) => {
    const path = names?.[entity]?.[id] ?? `api/v2/${entity}/${id}`;
    return require(`${__dirname}/pokeapi/data/${path}`);
  }
}

module.exports = entities.reduce((obj, entity) => {
  const key = entity.split('-')
    .map(str => str.charAt(0).toUpperCase() + str.substring(1))
    .join('');
  obj[`get${key}`] = get(entity);
  return obj;
}, {});
