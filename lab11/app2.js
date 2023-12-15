const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Define the routes and their corresponding responses
  if (req.url === '/image') {
    // Serve an image
    res.setHeader('Content-Type', 'image/jpeg'); // Set the appropriate content type
    fs.createReadStream('./IMG_9.JPG').pipe(res); // Replace with the actual image path
  } else if (req.url === '/pdf') {
    // Serve a PDF file
    res.setHeader('Content-Type', 'application/pdf'); // Set the content type for PDF
    fs.createReadStream('./myPdf.pdf').pipe(res); // Replace with the actual PDF path
  } else if (req.url === '/home') {
    // Send a text response
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my website');
  } else {
    // Handle other routes or 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

//const PORT = 3000;
server.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});