gulp

cd ./_compiled
electron main.js
cd ..

#electron-packager ./_compiled "Graph" --platform=darwin --arch=x64 --app-copyrigh="Copyright 2016 by Kary Foundation, Inc." --app-version="Build 188" --icon=designs/icon/icns/icon.icns --name="Graph" --out=_release --overwrite=true