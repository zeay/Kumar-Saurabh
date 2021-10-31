#!/usr/bin/env node
const pkjJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;

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

log(`
${chalk.bgBlue.bold(` Kumar Saurabh `)} 

${chalk.italic(`
Senior Software Engineer having more than 4+ years Experience
with Javascript and related technologine like Node.js and various 
frontend framework like react, Ext.js, Jquery.
Always willing to learn new things blockchain entusiast currently 
pursuing master from LJMU UK.`)}

${chalk.hex(`6cc644`).bold.inverse(` Github `)} ${chalk.dim('https://github.com/zeay')}
${chalk.hex(`405de6`).bold.inverse(` Insta `)}  ${chalk.dim('https://instagram.com/zeayycool')}

`);