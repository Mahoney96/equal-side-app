-- FUNCTION (A) --
CREATE TABLE customers_one(
    customer_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email VARCHAR(60),
    user_age INTEGER,
    region TEXT
);


-- THE BELOW SQL FUNCTION will NOT work. --
INSERT INTO customers_one( customer_id, first_name, last_name, email, user_age, region)

VALUES
    (John, Moore, jmoore@gmail.com, 22, EMEA),
    (Mike, Smith, smith@aol.com, 21, EMEA),
    (Lily, Garcia, lgarcia@hotmail.com, 63, EMEA),
    (Roberto, Walker, rwalker@gmail.com, 35, LATAM),
    (Jill, Garcia, jgarcia@hotmail.com, 69, LATAM),
    (Heather, Smith, hsmith@aol.com, 29, NORAM),
    (Alexi, Smith, asmith@gmail.com, 22, LATAM),
    (Cindy, Davis, cdavis@aol.com, 48, NORAM);
    -- NOTE: The Abve does not work, text values are needed to be in quotes in SQL. Without them, SQL is under the impression you are looking to select a column. --

-- FUNCTION (B) --
-- THIS FUNCTION WILL WORK --
INSERT INTO customers_one( customer_id, first_name, last_name, email, user_age, region)
VALUES
    (01, 'John', 'Moore', 'jmoore@gmail.com', 22, 'EMEA'),
    (02, 'Mike', 'Smith', 'smith@aol.com', 21, 'EMEA'),
    (03, 'Lily', 'Garcia', 'lgarcia@hotmail.com', 63, 'EMEA'),
    (04, 'Roberto', 'Walker', 'rwalker@gmail.com', 35, 'LATAM'),
    (05, 'Jill', 'Garcia', 'jgarcia@hotmail.com', 69, 'LATAM'),
    (06, 'Heather', 'Smith', 'hsmith@aol.com', 29, 'NORAM'),
    (07, 'Alexi', 'Smith', 'asmith@gmail.com', 22, 'LATAM'),
    (08, 'Cindy', 'Davis', 'cdavis@aol.com', 48, 'NORAM');




-- FUNCTION (C) DISPLAY ALL SQL DATABASE TABLE Names -- 
-- Copy and paste the below function, after the commenting, making it non-usbale has been removed:
-- SELECT table_name
--   FROM information_schema.tables
--  WHERE table_schema='public'
--    AND table_type='BASE TABLE';


-- FUNCTION (D): 
-- SELECT * FROM customers_one
    
-- Note: SOLUTION TO BELOW FUNCTION FAILING: 


-- (THIS WAS NOT WORKING: Morning.03/19/21) FUNCTION (E) --
-- SELECT * customers_one  -- This example is drawing an error in problems. 
-- How to display all data for a Table in SQL -- 
-- Function syntax is as follows:
                    -- SELECT * table_name -- (Telling SQL to display all the data for the table that comes after the ' * '.


