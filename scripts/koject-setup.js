const { execSync } = require('child_process');
const fs = require("fs");
const path = require('path')

function copy(serviceName, src, dest, includes) {    
    let workspaceInfo = execSync('yarn workspaces info', {cwd: src}).toString();
    console.log('workspaceInfo', workspaceInfo)
    let workspaces = workspaceInfo.substring(workspaceInfo.indexOf('{'), workspaceInfo.lastIndexOf('}') + 1);
    workspaces = JSON.parse(workspaces)[serviceName];
    let location = workspaces.location    
    includes.forEach(file => {
        file = file !== '' ? `/${file}`: ''
        let srcFile = `${src}/${location}${file}` 
        if(fs.existsSync(srcFile)) {
            console.log('srcFile: ', srcFile)
            let destFile = `${dest}/${location}${file}`;            
            let mkdirCmd = `mkdir -p ${path.resolve(destFile, '..')}`
            console.log(mkdirCmd, execSync(mkdirCmd).toString())
            let cpCmd = `cp -Rf ${srcFile} ${destFile} && ls -lha ${destFile}`;
            console.log(cpCmd, execSync(cpCmd).toString())
        }
    })    
    if (workspaces.workspaceDependencies) {
        let dependencies = workspaces.workspaceDependencies
        dependencies.forEach(package => {
            copy(package, src, dest, includes)
        })
    }
}

function main() {
    let src = '', dest = '.', includes=[''], name;
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
            case '--includes':
                    includes = args[i + 1].split(',')
                    i = i + 1;
                    break;
            default:
                name = args[i];
        }
    }
    copy(name, src, dest, includes)
}

main()