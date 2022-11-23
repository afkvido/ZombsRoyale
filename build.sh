# Remove existing build directories
rm -rf dist
rm -rf build

# Make directories for all needed folders of the extension
mkdir dist
mkdir dist/unzipped
mkdir dist/unzipped/redistributables
mkdir dist/zipped
mkdir build

# Put all the files in the extension
pnpm tsc                                    # Compile TypeScript, output to ./dist/unzipped
node scripts/manifest.cjs                   # Load manifest.json into the extension
cp -r assets dist/unzipped/assets           # Copy assets to the extension
cp src/popup.html dist/unzipped/popup.html  # Copy popup.html to the extension

# Load jQuery into the extension
wget \  
    https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js \
    -O dist/unzipped/redistributables/jquery.min.js

# Load SweetAlert2 into the extension
wget \   
    https://cdn.jsdelivr.net/npm/sweetalert2@latest \
    -O dist/unzipped/redistributables/sweetalert2.min.js


cd dist/unzipped
zip -q -ll -0 -r ../zipped/extension.zip .
cp ../zipped/extension.zip ../../build/ZombsRoyale+.zip
echo "Done!"