echo "Killing existing instance....."
#Kill first
# kill -9 `cat server.pid`
node_modules/forever/bin/forever stop server/index.js
echo "Killed process $(cat server.pid)"
#Increase open files
ulimit -n 10032
#Start bpsservice
echo "Starting.........."
NODE_ENV=production
node_modules/forever/bin/forever start server/index.js NODE_ENV=production  >> server.log &
echo $! > server.pid
echo "Started!!!!!!!!! pid=$(cat server.pid)"
