import fs from "fs";
import { replaceInFileSync } from "replace-in-file";
import crypto from "crypto";

function getFileHash(file) {
  const hash = crypto.createHash("shake256", { outputLength: 8 });
  return hash.update(fs.readFileSync(file, "utf8")).digest("hex");
}

function renameFile(file, newName) {
  fs.renameSync("./build/" + file, "./build/" + newName);

  const results = replaceInFileSync({
    files: "./build/index.html",
    from: new RegExp(file, "g"),
    to: newName,
  });

  if (results[0].hasChanged) console.log(`Renamed ${file} to ${newName}`);
  else console.error(`Not found ${file}`);
}

renameFile("build", `assets`);

const hashBundleJs = getFileHash("./build/assets/bundle.js");
const hashBundleCss = getFileHash("./build/assets/bundle.css");

renameFile("assets/bundle.js", `assets/bundle.${hashBundleJs}.js`);
renameFile("assets/bundle.css", `assets/bundle.${hashBundleCss}.css`);

fs.renameSync(
  "./build/assets/bundle.js.map",
  `./build/assets/bundle.${hashBundleJs}.js.map`
);

const results = replaceInFileSync({
  files: [
    `./build/assets/bundle.${hashBundleJs}.js.map`,
    `./build/assets/bundle.${hashBundleJs}.js`,
  ],
  from: "bundle.js",
  to: `bundle.${hashBundleJs}.js`,
});

if (results[0].hasChanged) console.log(`Update js and map files`);
else console.error(`Problem with js and map files`);
