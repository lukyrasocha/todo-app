drop table if exists Status;
drop table if exists Category;
drop table if exists User;
drop table if exists Todo;

create table Status(
id int auto_increment primary key,
status varchar(20));

create table Category(
id int auto_increment primary key,
category int);

create table User(
email varchar(50) primary key,
name varchar(50));


create table Todo(
id char(36) primary key,
status int references Status(id),
category int references Category(id),
assignee varchar(50) references User(email),
assigned varchar(50) references User(email),
title varchar(20),
description varchar(255),
date_added datetime,
date_completed datetime
);