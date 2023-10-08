CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Hospital(
    hospital_id uuid primary key default uuid_generate_v4(),
    name varchar collate "C" not null unique,
    logo bytea,
    password char(60) not null,
    email varchar not null unique
);

CREATE TABLE Patient (
    patient_id uuid primary key default uuid_generate_v4(),
    email varchar collate "C" not null unique,
    password char(60) not null,
    phone varchar,
    name varchar,
    profile_picture bytea,
    verified bool default true
);

CREATE TABLE Doctor(
    doc_id uuid primary key default uuid_generate_v4(),
    hospital_id uuid not null,
    name varchar,
    email varchar collate "C" not null unique,
    password char(60) not null,
    phone varchar,
    profile_picture bytea,
    description text,
    foreign key (hospital_id) references Hospital(hospital_id)
);

CREATE TABLE Appointment(
    doc_id uuid not null,
    patient_id uuid not null,
    appointment_id uuid default uuid_generate_v4() unique,
    placed_on timestamp default current_timestamp not null,
    start_datetime timestamp not null,
    end_datetime timestamp not null,
    duration interval generated always as (age(end_datetime, start_datetime)) stored,
    primary key (doc_id, patient_id, start_datetime),
    foreign key (doc_id) references Doctor(doc_id) on delete cascade,
    foreign key (patient_id) references Patient(patient_id) on delete cascade
);

CREATE TABLE Application() INHERITS (Appointment);

CREATE TABLE PatientInfo(
    patient_id uuid,
    description text,
    attachment bytea,
    foreign key (patient_id) references Patient(patient_id) on delete cascade
);

CREATE TABLE PatientInfoAccessPermissions(
    doc_id uuid not null,
    patient_id uuid not null,
    foreign key (doc_id) references Doctor(doc_id) on delete cascade,
    foreign key (patient_id) references Patient(patient_id) on delete cascade,
    primary key (doc_id, patient_id)
);

CREATE INDEX idx_doc_name_desc ON Doctor(name, description)