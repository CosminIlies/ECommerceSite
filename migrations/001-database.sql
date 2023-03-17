-- Up
CREATE TABLE product(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    category TEXT,
    imageLink TEXT,
    description TEXT,
    reviewStars FLOAT,
    price FLOAT,
    stock INTEGER 
);


CREATE TABLE ComputersAndLaptopsToProduct(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productID INTEGER REFERENCES product(id),
    paramsID INTEGER REFERENCES ComputersAndLaptopsParams(id)
);

CREATE TABLE ComputersAndLaptopsParams(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    procesor TEXT,
    brand TEXT,
    memorie TEXT
);



CREATE TABLE account(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    password TEXT,
    email TEXT,
    address TEXT
);

-- CREATE TABLE review( 
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     accID INTEGER REFERENCES Account(id),
--     productID INTEGER REFERENCES product(id),
--     title TEXT,
--     body TEXT,
--     stars INTEGER
-- );

INSERT INTO ComputersAndLaptopsParams (procesor, brand, memorie) values ('Intel® Core™ i3-1115G4', 'Lenovo', '8GB');
INSERT INTO product (name, category, imageLink, description, reviewStars, price, stock) values ('Laptop Lenovo IdeaPad 3 15ITL6 cu procesor Intel® Core™ i3-1115G4 pana la 4.10 GHz', 'ComputersAndLaptops', "https://s13emagst.akamaized.net/products/40450/40449742/images/res_9e057308a07ac64344f9128d88750477.jpg?width=720&height=720&hash=F3736D3425BBD35F8FB29E821BCAD368", "IdeaPad 3 este un laptop entry-level suficient de puternic pentru a va ajuta sa duceti lucrurile la bun sfarsit. Procesorul Intel Core  ofera o performanta rapida, multitasking fara efort si o excelenta experienta de divertisment. Desi poate fi catalogat ca un laptop pentru utilizare zilnica, IdeaPad 3 este mai mult de-atat. Cu un procesor Intel Core  - sustinut de optiuni puternice de memorie si stocare - inseamna ca acest dispozitiv ofera performante dincolo de asteptari. Mai mult, fie ca lucrati la bugetul familiei sau pregatiti o foaie de calcul, tastatura numerica va va accelera productivitatea. Marginile subtiri pe cele doua laturi va permit sa profitati la maxim de  display-ul FHD al laptopul IdeaPad 3 - si ofera un aspect curat, contemporan. Difuzoarele duale imbunatatite cu Dolby Audio ™ imbunatatesc sunetul, astfel incat va va placea ceea ce auziti, precum si ceea ce vedeti.", 3.6, 2261.0, 5);
INSERT INTO ComputersAndLaptopsToProduct(productID, paramsID) values (1, 1);

INSERT INTO ComputersAndLaptopsParams (procesor, brand, memorie) values ('Intel® Core™ i7-1165G7', 'ASUS', '8GB');
INSERT INTO product (name, category, imageLink, description, reviewStars, price, stock) values ('Laptop ASUS X515EA cu procesor Intel® Core™ i7-1165G7 pana la 4.70 GHz', 'ComputersAndLaptops', "https://s13emagst.akamaized.net/products/47104/47103369/images/res_ddb08173ec8d3d7a470fc139da396df2.jpg?width=720&height=720&hash=C9856124D283531B285A14C50B790C2E", "Experimenteaza puterea unui clasic de zi cu zi - Unul dintre cele mai mici laptop-uri de 15 inchi din lume Fie ca este vorba de lucru sau  gaming, ASUS X515 este laptopul entry-level care ofera performante puternice si imagini vizuale imersive. Afisajul NanoEdge are unghiuri largi de vizualizare de 178° si o acoperire mata anti-glare pentru o experienta cu adevarat incantatoare. Unitatile HDD instalate in sisteme laptop sunt in general mult mai susceptibile la aparitia unor defectiuni comparativ cu unitatile SSD. HDD-urile utilizate sunt echipate acum cu o solutie de protectie impotriva socurilor de tip EAR, ce are rolul de a-ti proteja datele impotriva impactului fizic. Solutia de protectie activa a unitatii rigide detecteaza in mod automat socurile si vibratiile pe trei axe pentru a reduce intr-o maniera eficienta sansele aparitiei unor defectiuni la nivelul HDD-ului, astfel incat vei putea lucra fara griji, chiar si intr-un vehicul aflat in miscare.", 4.4, 2649.99, 5);
INSERT INTO ComputersAndLaptopsToProduct(productID, paramsID) values (2, 2);



INSERT INTO account (name,  password, email, address) values ('Test Account', 'password123', 'account@test.com', 'test address nr -1');

-- Down
DROP TABLE product;
DROP TABLE ComputersAndLaptopsToProduct;
DROP TABLE ComputersAndLaptopsParams;
-- DROP TABLE review;
DROP TABLE account;
