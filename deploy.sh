set  -xe
firebase --project moonie --token 1/VYfiQZpTDv8RSVfSZYBeMGXQFwi-sq28jSphq_Eql-A functions:config:set service.db_username="postgres" service.db_password="dvt1KjoyBkCL47o0" service.db_host="104.197.58.229"
firebase deploy --project moonie --token 1/VYfiQZpTDv8RSVfSZYBeMGXQFwi-sq28jSphq_Eql-A