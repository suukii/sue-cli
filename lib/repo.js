const download = require('download-git-repo');

function downloadRepo(repo, destination) {
    return new Promise((resolve, reject) => {
        download(repo, destination, {}, function (err) {
            err ? reject(err) : resolve();
        });
    });
}

module.exports = {
    downloadRepo,
};
