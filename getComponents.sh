# Making the directories incase they dont exist yet
mkdir -p ./node_modules/@autoit/
cd ./node_modules/@autoit/

# We are going to clean the directory before we start. This is to ensure the best possible outcome.
# We will be deleting all files except: index.js, getComponents.sh, convertComponentsToPackage.sh
################################ THIS CAN BE A FATAL COMMAND. PLEASE MAKE SURE YOU RUN THIS FILE FROM THE DIRECTORY YOU WANT TO DELETE EVERYTHING IN #################################################################
shopt -s extglob
rm -rfv !(*.sh|*.js|*.json)
shopt -u extglob

# Getting the latest version of the components and cloning them to the current directory.
git clone https://github.com/Auto-IT-Australia/Newco-Components ./temp
# Moving everything to this folder
mv ./temp/* ./
rm -rf ./temp