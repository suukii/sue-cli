'use strict';

const fs = require('fs');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const ginit = require('@suukii/ginit');
const repo = require('./repo');
const files = require('./files');

async function run({ dirname, templateDirectory }) {
    const spinner = ora('Downloading template project...');

    try {
        const baseDir = path.resolve(dirname);

        if (!files.directoryExists(baseDir)) {
            fs.mkdirSync(baseDir);
        }

        spinner.start();

        // Download template project.
        await repo.downloadRepo(templateDirectory, baseDir);
        spinner.text = 'Downloaded';
        spinner.succeed();

        // Change project name in package.json file.
        spinner.text = 'Changing name of the project...';
        const pkgPath = path.resolve(baseDir, 'package.json');
        // Get the current direcotry as a default repo name.
        files.overwritePackageJSON(pkgPath, {
            name: dirname || files.getCurrentDirecotryBase(),
        });
        spinner.text = 'Project name changed.';
        spinner.succeed();

        // Initialize a local Git repository, create a remote GitHub repository, and push.
        ginit({ dirname });
    } catch (error) {
        switch (error.status) {
            case 404:
                console.log(chalk.red('Template repository not found.'));
                break;

            default:
                console.log(chalk.red(error));
                break;
        }
    } finally {
        spinner.stop();
    }
}

module.exports = {
    run,
};
