cd functions
echo $1
firebase --token $1 functions:config:set service.db_username="postgres" service.db_password="dvt1KjoyBkCL47o0" service.db_host="104.197.58.229"
firebase deploy --token $1