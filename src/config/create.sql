-- -----------------------------------------------------
-- Table "school"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "school" ;

CREATE TABLE IF NOT EXISTS "school" (
  "id" BIGSERIAL PRIMARY KEY,
	"school_id" VARCHAR(20) NOT NULL,
  "school_name" VARCHAR(30) NOT NULL,
  "province" VARCHAR(10),
  "city" VARCHAR(10),
  "description" VARCHAR(50) NULL,
	UNIQUE("school_id")
);

-- -----------------------------------------------------
-- Table "major"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "major" ;

CREATE TABLE IF NOT EXISTS "major" (
  "id" BIGSERIAL PRIMARY KEY,
	"major_type_id" INT NOT NULL,
  "school_id" INT NULL,
  FOREIGN KEY ("school_id")
  REFERENCES "school" ("id"),
	FOREIGN KEY ("major_type_id")
  REFERENCES "major_type" ("id")
);

DROP TABLE IF EXISTS "major_type" ;

CREATE TABLE IF NOT EXISTS "major_type" (
  "id" BIGSERIAL PRIMARY KEY,
	"major_id" VARCHAR(20) NOT NULL,
  "major_name" VARCHAR(20) NOT NULL,
  "major_type" VARCHAR(20) NOT NULL,
	UNIQUE("major_id")
);

-- -----------------------------------------------------
-- Table "subject"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "subject" ;

CREATE TABLE IF NOT EXISTS "subject" (
  "id" BIGSERIAL PRIMARY KEY,
  "subject_name" VARCHAR(20) NOT NULL,
	UNIQUE("subject_name")
);



-- -----------------------------------------------------
-- Table "student"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "student" ;

CREATE TABLE IF NOT EXISTS "student" (
  "id" BIGSERIAL PRIMARY KEY,
  "id_number" VARCHAR(45) NOT NULL,
  "sex" VARCHAR(2) ,
  "phone_number" VARCHAR(20) ,
  "name" VARCHAR(20) ,
  "high_school_name" VARCHAR(45) ,
  "province" VARCHAR(10),
	UNIQUE("id_number")
);



-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "user" ;

CREATE TABLE IF NOT EXISTS "user" (
  "uuid" TEXT PRIMARY KEY DEFAULT(uuid()),
  "username" VARCHAR(20) NOT NULL,
  "pwd" VARCHAR(64) NULL,
  "level" VARCHAR(10) NULL DEFAULT('user'),
	"student_id" INT  NULL ,
	FOREIGN KEY ("student_id")
	REFERENCES "student" ("id")	,
	UNIQUE("username")
);



-- -----------------------------------------------------
-- Table "registration"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "registration" ;

CREATE TABLE IF NOT EXISTS "registration" (
  "id" BIGSERIAL PRIMARY KEY,
  "conditions" VARCHAR(200) NULL,
  "start_time" TIMESTAMP NULL,
  "end_time" TIMESTAMP NULL,
  "registration_way" VARCHAR(20) NULL,
  "school_id" INT NOT NULL,
	FOREIGN KEY ("school_id")
	REFERENCES "school" ("id")
);



-- -----------------------------------------------------
-- Table "enrollment"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "enrollment" ;

CREATE TABLE IF NOT EXISTS "enrollment" (
  "id" BIGSERIAL PRIMARY KEY,
  "major_id" INT NOT NULL,
  "subject_id" INT NOT NULL,
  "year" INT NOT NULL,
  "tuition" DECIMAL NULL,
	"plan_number" INT,
  "other_requirement" TEXT NULL DEFAULT('无'),
	FOREIGN KEY ("major_id")
	REFERENCES "major" ("id"),
	FOREIGN KEY ("subject_id")
	REFERENCES "subject" ("id"),
	UNIQUE("major_id", "subject_id", "year")
 );



-- -----------------------------------------------------
-- Table "xuekao"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "xuekao" ;

CREATE TABLE IF NOT EXISTS "xuekao" (
  "id" BIGSERIAL PRIMARY KEY,
  "id_number" VARCHAR(20) NOT NULL,
  "subject_id" INT NOT NULL,
  "level" VARCHAR(3) NULL,
	FOREIGN KEY ("subject_id")
	REFERENCES "subject" ("id"),
	FOREIGN KEY ("id_number")
	REFERENCES "student" ("id_number")
);



-- -----------------------------------------------------
-- Table "speciality"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "speciality" ;

CREATE TABLE IF NOT EXISTS "speciality" (
  "id" BIGSERIAL PRIMARY KEY,
  "id_number" VARCHAR(20) NULL,
  "type" VARCHAR(10) NULL,
  "level" VARCHAR(10) NULL,
  "description" VARCHAR(100) NULL,
  "materials" VARCHAR(100) NULL,
	FOREIGN KEY ("id_number")
	REFERENCES "student" ("id_number")
);



-- -----------------------------------------------------
-- Table "recommendation"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "recommendation" ;

CREATE TABLE IF NOT EXISTS "recommendation" (
  "id" BIGSERIAL PRIMARY KEY,
  "id_number" VARCHAR(20) NULL,
  "subject_id" INT NULL,
  "reason" VARCHAR(200) NULL, DEFAULT('无'),
	FOREIGN KEY ("id_number")
  REFERENCES "student" ("id_number"),
	FOREIGN KEY ("subject_id")
  REFERENCES "subject" ("id")
);



-- -----------------------------------------------------
-- Table "xuankao"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "xuankao" ;

CREATE TABLE IF NOT EXISTS "xuankao" (
  "id" BIGSERIAL PRIMARY KEY,
  "id_number" VARCHAR(20) NOT NULL,
  "subject_id" INT NOT NULL,
  "grade" INT NULL,
	FOREIGN KEY ("id_number")
	REFERENCES "student" ("id_number"),
	FOREIGN KEY ("subject_id")
	REFERENCES "subject" ("id")
);


DROP VIEW major_view;

CREATE VIEW "major_view"  AS
SELECT major.id AS id, major_id, major_name, major_type, school_name
FROM major, school, major_type
WHERE major.school_id = school.id AND major.major_type_id = major_type.id

DROP VIEW enrollment_view;

CREATE VIEW "enrollment_view"  AS
SELECT enrollment.id AS id, school_name, major_view.major_name, subject.subject_name, year, tuition, other_requirement, plan_number
FROM major_view, enrollment, subject
WHERE major_view.id = enrollment.major_id AND subject.id = subject_id

DROP VIEW registration_view;

CREATE VIEW "registration_view"  AS
SELECT registration.id AS id, school_name, conditions, start_time, end_time, registration_way
FROM registration, school
WHERE registration.school_id = school.id

DROP VIEW speciality_view;

CREATE VIEW "speciality_view"  AS
SELECT speciality.id AS id, speciality.id_number, level, name, type, description, materials
FROM speciality, student
WHERE speciality.id_number = student.id_number

DROP VIEW xuankao_view;

CREATE VIEW "xuankao_view"  AS
SELECT xuankao.id, xuankao.id_number, grade, subject_name, name
FROM subject, student, xuankao
WHERE subject.id = xuankao.subject_id AND xuankao.id_number = student.id_number

DROP VIEW xuekao_view;

CREATE VIEW "xuekao_view"  AS
SELECT xuekao.id, xuekao.id_number, level, subject_name, name
FROM subject, student, xuekao
WHERE subject.id = xuekao.subject_id AND xuekao.id_number = student.id_number

CREATE
	OR REPLACE FUNCTION uuid ( ) RETURNS TEXT AS $BODY$ DECLARE
	passed BOOLEAN;
BEGIN
		RETURN (
		SELECT REPLACE
			(
				uuid_in (
					md5(
						random( ) :: TEXT || now( ) :: TEXT
					) :: cstring
				) :: TEXT,
				'-' :: TEXT,
				'' :: TEXT
			)
		);
	RETURN passed;

END; $BODY$ LANGUAGE'plpgsql' VOLATILE COST 100;

