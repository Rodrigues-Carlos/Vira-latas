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

INSERT INTO TB_Users (user_name, user_email, user_phone,  user_password, user_cpf) 
	VALUES ("root", "email@email", "(99) 99999-9999", "teste@13", "00000000000");
    
INSERT INTO TB_Users (user_name, user_email, user_phone,  user_password, user_cpf) 
	VALUES ("meunome", "meuemail@email.com", "(41)94144-9999", "123432@13", "0552453234");
    
select * from DB_Viralata.TB_Users;
