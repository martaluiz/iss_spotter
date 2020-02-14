const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('184.68.214.222', (error, coords) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log('It worked! Returned Coords:', coords);
});