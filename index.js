module.exports = {
  compile: (source, folder) => require('child_process').execSync(`node_modules/.bin/lessc ${folder ? '--include-path='+folder : ''} -`, { input: source, encoding: 'utf-8', maxBuffer: Infinity })
}
