const transform = (value: string, cb: (dict: { [key: string]: number }) => any) => {
  const chars = value.split('');
  const dict: { [key: string]: number } = chars.reduce((acc, item) => {
    acc[item] = item.charCodeAt(0);
    return acc;
  }, {});
  return cb(dict);
};


const getKeys = (dict: {[key:string]:any}) => Object.keys(dict);
const getValues = (dict: {[key:string]:any}) => Object.values(dict);

const keys = transform('test', getKeys);
const values = transform('test', getValues);

console.log(`keys: ${keys.join(', ')}`);
console.log(`values: ${values.join(', ')}`);