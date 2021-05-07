# Run project

docker-compose -f docker-compose-dev.yml up --build

# Access to container

docker exec -ti -u root #container_id /bin/bash

# Generate model

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# Migrate

sequelize db:migrate --url "postgres://hackademy_user:tupass@postgres:5432/hackademydbtest"
