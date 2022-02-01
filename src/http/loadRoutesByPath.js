const path = require('path');
const filterFiles = require('filter-files');
const isDir = require('is-directory');

const isRouteFile = fileName =>
  /((route)|(routes))\.js$/.test(fileName);

const getRoutesFilesFromDirName = dirname => {
  return filterFiles.sync(dirname, (fp, dir, files, recurse) => {
    if (isRouteFile(fp)) {
      return true;
    }

    return isDir.sync(path.join(dir, fp));
  }, true);
};

const loadRoutesByPath = (server, dirName) => {
  getRoutesFilesFromDirName(dirName)
    .forEach(fileName => require(fileName)(server))
};

module.exports = loadRoutesByPath;
