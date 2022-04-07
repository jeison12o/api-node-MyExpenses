module.exports = (db, dataTypes) => {
  return db.define("buy", {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: dataTypes.STRING },
    description: { type: dataTypes.STRING },
    value: { type: dataTypes.INTEGER },
  });
};
