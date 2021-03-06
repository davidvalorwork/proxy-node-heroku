// Heroku defines the environment variable PORT, and requires the binding address to be 0.0.0.0
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;

// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     //requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// })
const express = require('express');
const app = express();
const {createProxyMiddleware } = require('http-proxy-middleware');
const wsProxy = createProxyMiddleware('ws://awseb-e-e-AWSEBLoa-HN82XDCPCIIM-726758365.ap-southeast-2.elb.amazonaws.com')
app.use(wsProxy)
app.listen(port,host,function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
})
app.on('upgrade', wsProxy.upgrade)
