const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

module.exports = function(app){
    app.use(
        createProxyMiddleware("/api",{
            target:"http://localhost:5000/",
            changeOrigin:true,
        })
    )
}

