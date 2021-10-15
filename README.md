```
---Install NODE using nvm (this is your environment to run React applicatoins)---

curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh -o install_nvm.sh
bash install_nvm.sh
source ~/.profile
nvm install 12.22.5
nvm use 12.22.5

---Install yarn(a package manager for React apps) ---

npm install --global yarn

---Install dependent packages to your React app---

yarn install

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


---!!! Start the app !!! (this will start your app in dev mode)---

yarn start

your app should start working at https://localhost:3000



------FOR CONTAINER------

use NODE version 12.22.5

yarn install
npm rebuild node-sass

yarn start

---------------------------


```
