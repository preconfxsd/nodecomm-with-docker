#!/bin/bash
# set -e

# psql -v ON_ERROR_STOP=1 --username "serhat" <<-EOSQL
#     DROP USER admin;
#     CREATE USER admin;
#     DROP DATABASE IF EXISTS onprem;
#     CREATE DATABASE onprem;
#     GRANT ALL PRIVILEGES ON DATABASE onprem TO admin;
# EOSQL
# set -e

# psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
#     CREATE USER admin;
#     CREATE DATABASE onprem;
#     GRANT ALL PRIVILEGES ON DATABASE onprem TO admin;
# EOSQL