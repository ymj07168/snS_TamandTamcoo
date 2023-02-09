const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const URL = process.env.REACT_APP_URL;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: URL,
      changeOrigin: true,
    })
  );
};
