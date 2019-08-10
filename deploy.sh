cd functions
firebase --token $1 functions:config:set service.db_username="postgres" service.db_password="$2" service.db_host="104.197.58.229"
firebase deploy --token $1