rm -rf dist
rm -rf build
mkdir dist
mkdir dist/unzipped
mkdir dist/unzipped/redistributables
mkdir dist/zipped
mkdir build
pnpm tsc
node scripts/manifest.cjs
cp -r assets dist/unzipped/assets
cp src/popup.html dist/unzipped/popup.html
cp src/jquery.min.js dist/unzipped/redistributables/jquery.min.js
cd dist/unzipped
zip -q -ll -0 -r ../zipped/extension.zip .
cp ../zipped/extension.zip ../../build/ZombsRoyale+.zip
echo "Done!"