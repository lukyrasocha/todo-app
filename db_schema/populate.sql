-- CATEGORIES
INSERT INTO Category(category) VALUES(1);
INSERT INTO Category(category) VALUES(2);
INSERT INTO Category(category) VALUES(3);

-- STATUS
INSERT INTO Status(status) VALUES('Assigned');
INSERT INTO Status(status) VALUES('In progress');
INSERT INTO Status(status) VALUES('Stuck');
INSERT INTO Status(status) VALUES('Done');

-- USERS
INSERT INTO User(email,name) VALUES('michael@gmail.com','Michael Marigliano');
INSERT INTO User(email,name) VALUES('lukas@gmail.com','Luky Rasocha');
INSERT INTO User(email,name) VALUES('robert@gmail.com','Robert Spralja');
INSERT INTO User(email,name) VALUES('ludek@gmail.com','Ludek Cizinsky');
INSERT INTO User(email,name) VALUES('mika@gmail.com','Mika Senghaas');

-- TODOS
INSERT INTO Todo(id,status,category,assignee,assigned,title,description,date_added,date_completed) VALUES('2f3as3fe4442s',1,1,'lukas@gmail.com','michael@gmail.com','First assignment','This is my first assignment for computas, hope it goes well',sysdate(),sysdate());
INSERT INTO Todo(id,status,category,assignee,assigned,title,description,date_added,date_completed) VALUES('3fass325kasls',2,2,'robert@gmail.com','mika@gmail.com','Do this for me','This the second assignment for computas, hope it goes well',sysdate(),sysdate());

