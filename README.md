# Gekko
[![Install Gekko with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=Gekko)<br><br>

Gekko is a free and open source Bitcoin TA trading and backtesting platform connects to popular Bitcoin exchanges https://gekko.wizb.it/



## After installation
Do `cd /var/www/gekko` and run `node gekko --ui` (To-do run the service as daemon)
OR
Install PM2 `npm install pm2 -g |` and run gekko with PM2 `pm2 start gekko.js --name gekko -- --ui`. For more information on PM2 visit http://pm2.keymetrics.io/

## To-do
- [X] Install script
- [X] Remove script
- [ ] Upgrade script
- [X] Backup and Restore scripts(need testing)
- [ ] Run as daemon 
