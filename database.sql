CREATE DATABASE IF NOT EXISTS DB_ViraLata;
DROP DATABASE IF EXISTS DB_ViraLata;

USE DB_ViraLata;

CREATE TABLE IF NOT EXISTS DB_ViraLata.TB_Users(
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_phone CHAR(15) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_cpf CHAR(12) NOT NULL

);
DROP TABLE IF EXISTS TB_Users;


    
select * from DB_Viralata.TB_Users;
