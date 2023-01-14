export default function objectToNormalNumber(obj) {
  const newObj = {};
  Object.entries(obj).map(([k, v]) => {
    newObj[k] = v.toNormalNumber();
  });
  return newObj;
}
