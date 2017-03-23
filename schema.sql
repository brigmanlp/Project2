CREATE DATABASE greenpoints;

use greenpoints;

CREATE TABLE greenData (
    OBJECTID INT NOT NULL PRIMARY KEY,
    Theme varchar(100) NULL,
    Topic varchar(50) NULL,
    FeatureName varchar(100) NULL,
    FeatureLocation varchar(255) NULL,
    FeatureDescription varchar(255) NULL,
    Image1Name varchar(100) NULL,
    Image1Description varchar(255) NULL,
    Image1Path varchar(255) NULL,
    Image2Name varchar(100) NULL,
    Image2Description varchar(255) NULL,
    Image2Path varchar(255) NULL,
    Link1Name varchar(100) NULL,
    Link1Description varchar(255) NULL,
    Link1Image varchar(255) NULL,
    Link1Path varchar(255) NULL,
    Link2Name varchar(100) NULL,
    Link2Description varchar(255) NULL,
    Link2Image varchar(255) NULL,
    Link2Path varchar(255) NULL,
    GeneralNotes varchar(255) NULL,
    Latitude numeric(38) NULL,
    Longitude numeric(38) NULL);