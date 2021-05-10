# Run project

docker-compose -f docker-compose-dev.yml up --build

# Access to container

docker exec -ti -u root #container_id /bin/bash

# Generate model

npx sequelize-cli model:generate --name teachers --attributes firstName:string,lastName:string,email:string,age:integer

# Execute Migrate

sequelize db:migrate --url "postgres://user_db:tupass@postgres:5432/boilerplate_db"

# Create new migration

npx sequelize-cli migration:create --name modify_users_add_new_fields

---

npx sequelize-cli model:generate --name teachers --attributes firstName:string,lastName:string,email:string,age:integer

npx sequelize-cli model:generate --name courses --attributes name:string,credits:integer

npx sequelize-cli model:generate --name courseTeachers --attributes teacherId:integer,courseId:integer

# Association

https://sequelize.org/master/manual/assocs.html#:~:text=To%20do%20this%2C%20Sequelize%20provides,The%20BelongsToMany%20association

- Affect the migrations to ref the tables
