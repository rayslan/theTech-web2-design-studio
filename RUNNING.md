```
---Install node using nvm---

curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh -o install_nvm.sh
bash install_nvm.sh
source ~/.profile
nvm install 12.22.5
nvm use 12.22.5

---Install yarn ---

npm install --global yarn

---Install dependent packages ---

yarn install

!!! Start the app !!!

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
yarn start

------FOR CONTAINER------

use NODE version 12.22.5

yarn install
npm rebuild node-sass

yarn start

---------------------------



```
