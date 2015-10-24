import express from "express";
import request from 'request';
const app = express();

const router = express.Router();

//route all microservice request to http://localhost:8080
app.use('/microservice', (req, res) => {
    req.pipe(request('http://localhost:8080/' + req.url)
      .on('error', (e) => { console.warn(e.message); }))
      .pipe(res);
});

// Listen to this Port
app.listen(3000,function(){
  console.log("Router alive at Port 3000");
});
