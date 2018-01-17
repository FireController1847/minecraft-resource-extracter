# Minecraft Resource Extracter
This script will extract all audio files (and possibly more in the future) from the Minecraft objects file. This way, you can now modify and include sounds in your resourcepacks without having to dig through a bunch of files.

# How to Use
1. Clone this repository into a folder ([a great tutorial can be found here](https://help.github.com/articles/cloning-a-repository/)).
2. Make sure you have [Node.js](https://nodejs.org/en/) installed.
3. Open a terminal or command prompt, and navigate into the cloned folder.
4. Run `npm install` to install all the required modules.
5. Navigate into the src folder.
6. Open the `index.js` file in any text editor, and modify the dotMinecraft and mcVersion variables. Make dotMinecraft the directory to your .minecraft folder, and change mcVersion to the pure version number you want (1.7.10, 1.8.9, 1.9.4).
    - Make sure you run the version you want to extract before using this script! It's similar to installing Minecraft Forge.
    - For Windows users, replace all backslashes with 2 backslashes to stop it from erroring. If your slahses are forward slashses, you will be fine.
7. Run `node index.js`.
8. Check your out folder. You should now have all the sound files in Minecraft!