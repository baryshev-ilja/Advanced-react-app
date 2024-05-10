#!/bin/bash
cd ~/Advanced-react-app
pm2 stop 0
git pull
pm2 start json-server/index.js
npm run build:prod

rm -rf /var/www/Advanced-react-app/html
mv build /var/www/Advanced-react-app/html
