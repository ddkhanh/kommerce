const { exec } = require('child_process');
exec('yarn workspaces info', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    let workspaces = JSON.parse(stdout)
    process.argv.forEach(function (val, index, array) {

    });
});

function copy(serviceName, src, dest) {
    let fullName = serviceName
    shellCommand('yarn workspaces info', (info) => {
        let workspaces = JSON.parse(stdout)
        let location = workspaces[fullName]
        let copyDirs = `cp ${src}/${location} `;
        if (workspaces.workspaceDependencies) {
            let workspaceDependencies = workspaces.workspaceDependencies
            workspaceDependencies.forEach(package => {
                copy(package)
            })
        }
        copyDirs = copyDirs.concat(dest);
        shellCommand(copyDirs, (out) => {
            console.log("Copy service " + serviceName + " result " + out)
        })
    })
}

function shellCommand(cmd, callback) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        callback(stdout)
    });
}

function main() {
    let src = '.', dest = '.', name;
    let args = process.argv;
    for (var i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--src':
                src = args[i + 1]
                i = i + 1;
                break;
            case '--dest':
                dest = args[i + 1]
                i = i + 1;
                break;
            default:
                name = args[i];
        }
    }
    copy(name, src, dest)
}

main()