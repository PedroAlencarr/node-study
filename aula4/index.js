const fs = require("fs").promises;
const path = require("path");

// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const filleFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(filleFullPath);

    if (/\.txt$/.test(file)) continue;
    if (stats.isDirectory()) {
      readdir(filleFullPath);
      continue;
    }

    console.log(filleFullPath, stats.isDirectory());
  }
}

readdir("/Users/accesscontrolkhomp/Desktop/myPersonalProjects/nodeJS");
