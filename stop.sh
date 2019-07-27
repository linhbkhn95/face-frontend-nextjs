
echo "Killing existing instance....."
#Kill first
# kill -9 `cat server.pid`
node_modules/forever/bin/forever stop server/index.js
echo "Killed process $(cat server.pid)"
#Increase open files
#ulimit -n 10032
#Start processingserver
#echo "Starting.........."
#sails lift &
#echo $! > server.pid
echo "Stopped!!!!!!!!! pid=$(cat server.pid)"
