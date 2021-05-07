# Run project

docker-compose -f docker-compose-dev.yml up --build

# Access to container

docker exec -ti -u root #container_id /bin/bash

# Generate model

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# Execute Migrate

sequelize db:migrate --url "postgres://user_db:tupass@postgres:5432/boilerplate_db"

# Create new migration

npx sequelize-cli migration:create --name modify_users_add_new_fields

---

npx sequelize-cli model:generate --name Teacher --attributes firstName:string,lastName:string,email:string,age:integer

npx sequelize-cli model:generate --name Course --attributes name:string,lastName:string,credits:integer

npx sequelize-cli model:generate --name CourseTeacher --attributes teacherId:integer,courseId:integer
