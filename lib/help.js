function printHelp() {
    console.log('Usage: sue <command> [options]');
    console.log('');
    console.log('Options:');
    console.log('--help, -h                                     output usage information');
    console.log('');
    console.log('Commands:');
    console.log(
        'create <app-name> --template=username/repo      create a new project',
    );
}

module.exports = {
    printHelp,
};