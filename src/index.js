// Modules
const path = require("path");
const shelljs = require("shelljs");
const fs = require("fs");
// Pathes
const dotMinecraft = "C:\\Users\\usfir\\AppData\\Roaming\\.minecraft";
const mcVersion = "1.7.10";
// Workspace Folders
const out = "../out";
const temp = "../temp";
// Start
(async () => {
  const vP = path.join(dotMinecraft, `versions/${mcVersion}/${mcVersion}.json`);
  if (!fs.existsSync(vP)) return console.error("Specified Minecraft version does not exist. Did you run the game once?");
  let vF;
  try {
    vF = JSON.parse(fs.readFileSync(vP));
    if (vF.inheritsFrom) return console.error("Forge is incompatible with this program. Please use a vanilla version.");
  } catch(e) {
    return console.error("Error attempting to parse Minecraft version file.\n", e);
  }
  const aI = vF.assetIndex.id;
  const aP = path.join(dotMinecraft, `assets/indexes/${aI}.json`);
  if (!fs.existsSync(aP)) return console.error("This Minecraft version's index does not exist. Did you run the game once?");
  let aF;
  try {
    aF = JSON.parse(fs.readFileSync(aP));
  } catch(e) {
    return console.error("Error attempting to parse this Minecraft version's index file.");
  }
  if (!fs.existsSync(out)) fs.mkdirSync(out);
  if (!fs.existsSync(temp)) fs.mkdirSync(temp);
  for (const key in aF.objects) {
    const sP = path.parse(key);
    if (sP.ext != ".ogg") continue;
    const obj = aF.objects[key];
    const dir = path.join(dotMinecraft, `assets/objects/${obj.hash.substring(0, 2)}`);
    if (!fs.existsSync(dir)) continue;
    let f;
    try {
      f = fs.readFileSync(path.join(dir, `/${obj.hash}`));
      const fOut = path.join(out, `${mcVersion}/assets/${sP.dir}`);
      if (!fs.existsSync(fOut)) shelljs.mkdir("-p", fOut);
      fs.writeFileSync(path.join(fOut, `/${sP.base}`), f);
    } catch(e) {
      console.log(e);
      continue;
    }
  }
  console.log("Completed. Press CTRL+C to exit.");
})();