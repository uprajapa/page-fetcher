const fs = require('fs');
const request = require('request');
const URL = process.argv[2];
const PATH = process.argv[3];
let content = "";

request(URL, (error, response, body) => {
  if (error) {console.log('error:', error);} // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(PATH, body, err => {
    if (err) {
      console.error(`Error writing to the file:\n${err}`);
    }
    // file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`);
  });
});
