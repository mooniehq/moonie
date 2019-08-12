cd functions

token=$1
dbUsername=$2
dbHost=$3

firebase --token $token functions:config:set service.db_username="postgres" service.db_password="$dbUsername" service.db_host="$dbHost"
firebase deploy --token $token