ALTER USER 'node_user'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
FLUSH PRIVILEGES;

USE node_db;

CREATE TABLE IF NOT EXISTS people(
    id int not null auto_increment primary key, 
    name varchar(255) 
);