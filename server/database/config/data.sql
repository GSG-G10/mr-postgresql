BEGIN;

DROP TABLE IF EXISTS users , todos cascade;

CREATE TABLE users (
  id           SERIAL       PRIMARY KEY ,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  password     VARCHAR(255) NOT NULL           
);

CREATE TABLE todos  (
  id           SERIAL       PRIMARY KEY ,
  description  VARCHAR(255) NOT NULL,
  done         boolean DEFAULT false 
);

COMMIT;