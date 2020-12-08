#! /usr/bin/env node

'use strict';

const minimist = require('minimist');
const { printHelp } = require('../lib/help');
const { run } = require('../lib/run');

const argv = minimist(process.argv.slice(2));
const create = argv._[0] === 'create';
const dirname = argv._[1] || '';
const templateDirectory = argv.template || 'big-house-road/meme';

if (argv.help || argv.h) {
    printHelp();
    return;
}

if (!create) {
    console.log(
        'Invalid usage. Please type "sue --help" or "sue -h" to get usage information.',
    );
    process.exit(1);
}

run({ dirname, templateDirectory });
