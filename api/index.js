const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Laravel Backend URL
const target = 'https://aexa.ebikeridebd.app';

app.use('/', createProxyMiddleware({
  target: target,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    // প্রয়োজন হলে এখানে হেডার মডিফাই করা যায়
  },
}));

// Vercel এর জন্য এটি এক্সপোর্ট করতে হয়
module.exports = app;