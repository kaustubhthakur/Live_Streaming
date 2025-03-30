const express = require('express')
const app = express();
const port = 9000
const ratelimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: "Too many requests from this IP, please try again later.",
    headers: true, 
});
app.use(limiter);
app.listen(port, () => {
    console.log(`server is running on port ${port}...`)
})