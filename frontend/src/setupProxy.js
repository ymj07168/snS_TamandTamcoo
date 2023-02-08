const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://54.65.17.182:5000/",
            changeOrigin: true,
        })
    )
}

