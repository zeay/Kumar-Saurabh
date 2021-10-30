#!/usr/bin/env node
const pkjJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkjJSON.name,
    tagLine: 'Howdy, nice to meet ya!',
    description: pkjJSON.description,
    version: pkjJSON.version,
    bgColor: '#FADC00',
    color: '#000000',
    bold: true,
    clear: true
});

console.log(`
Kumar Saurabh 

Senior Software Engineer having more than 4+ years Experience
with Javascript and related technologine like Node.js and various 
frontend framework like react, Ext.js, Jquery.
Always willing to learn new things blockchain entusiast currently 
pursuing master from LJMU UK.

:book: Github: https://github.com/zeay

`);