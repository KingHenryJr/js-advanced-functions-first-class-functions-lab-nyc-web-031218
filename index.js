const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0,2)
};
const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(n) {
  return function (fare) {
    return fare * n
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driver, fn) {
  return fn(driver);
}
