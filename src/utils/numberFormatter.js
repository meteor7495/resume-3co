export default function numberFormatter(num, digits) {
  console.log({ num, digits })
  const lookup = [
    { value: 1e-9, symbol: "e-9" },
    { value: 1e-7, symbol: "e-7" },
    { value: 1e-6, symbol: "e-6" },
    { value: 1e-3, symbol: "e-3" },
    { value: 1, symbol: "" },
    // { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    // { value: 1e15, symbol: "P" },
    // { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? `${(num / item.value).toFixed(digits).replace(rx, "$1")} ${item.symbol}`
    : "0";
}