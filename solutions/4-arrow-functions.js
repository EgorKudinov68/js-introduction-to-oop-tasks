// BEGIN
const each = (collection, callback) => {
  for (let i = 0; i < collection.length; i++) {
    callback.call(collection[i]);
  }
};

export default each;
// END
