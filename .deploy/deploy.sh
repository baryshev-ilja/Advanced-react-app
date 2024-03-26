cd ~/Advanced-react-app
git pull
npm run build:prod

cd rm -rf /var/www/Advanced-react-app/html
mv build /var/www/Advanced-react-app/html
