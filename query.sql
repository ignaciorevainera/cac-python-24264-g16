-- Crear tabla de categoría
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Crear tabla de producto
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    free_shipping BOOLEAN NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

-- Insertar categorías
INSERT INTO category (name) VALUES
('Plantas de Interior'),
('Plantas de Exterior'),
('Macetas y Contenedores'),
('Herramientas'),
('Sustratos y Fertilizantes'),
('Sistemas de Riego'),
('Decoración de Jardín'),
('Libros y Guías'),
('Muebles de Jardín');

-- Insertar productos
INSERT INTO product (name, category_id, price, free_shipping) VALUES
('Cactus de Interior', (SELECT id FROM category WHERE name='Plantas de Interior'), 1999.99, TRUE),
('Maceta Colgante de Mimbre', (SELECT id FROM category WHERE name='Macetas y Contenedores'), 1599.99, FALSE),
('Sistema de Riego Automático', (SELECT id FROM category WHERE name='Sistemas de Riego'), 3499.99, TRUE),
('Abono Orgánico para Plantas', (SELECT id FROM category WHERE name='Sustratos y Fertilizantes'), 2499.99, FALSE),
('Pinza Jardinera Multifuncional', (SELECT id FROM category WHERE name='Herramientas'), 3999.99, TRUE),
('Estatua de Buda para Jardín Zen', (SELECT id FROM category WHERE name='Decoración de Jardín'), 4999.99, FALSE),
('Introducción a la Jardinería', (SELECT id FROM category WHERE name='Libros y Guías'), 3999.99, TRUE),
('Kit de Cultivo de Tomates Cherry', (SELECT id FROM category WHERE name='Sustratos y Fertilizantes'), 2999.99, FALSE),
('Set de 3 Macetas de Cerámica', (SELECT id FROM category WHERE name='Macetas y Contenedores'), 1999.99, TRUE),
('Mesa de Jardín Plegable', (SELECT id FROM category WHERE name='Muebles de Jardín'), 5999.99, FALSE),
('Planta Monstera para Exterior', (SELECT id FROM category WHERE name='Plantas de Exterior'), 7999.99, FALSE),
('Helecho de Interior Culantrillo', (SELECT id FROM category WHERE name='Plantas de Interior'), 3999.99, FALSE);

-- Insertar más productos
INSERT INTO product (name, category_id, price, free_shipping) VALUES
('Macetero Rectangular de Cemento', (SELECT id FROM category WHERE name='Macetas y Contenedores'), 1299.99, FALSE),
('Set de Herramientas para Bonsái', (SELECT id FROM category WHERE name='Herramientas'), 2499.99, TRUE),
('Tierra para Plantas de Interior', (SELECT id FROM category WHERE name='Sustratos y Fertilizantes'), 999.99, FALSE),
('Rociador de Agua Manual', (SELECT id FROM category WHERE name='Herramientas'), 599.99, TRUE),
('Farol Solar para Jardín', (SELECT id FROM category WHERE name='Decoración de Jardín'), 1499.99, TRUE),
('Manual de Cultivo de Orquídeas', (SELECT id FROM category WHERE name='Libros y Guías'), 1999.99, TRUE),
('Banco de Jardín de Madera', (SELECT id FROM category WHERE name='Muebles de Jardín'), 7999.99, FALSE),
('Kit de Herramientas de Jardinería', (SELECT id FROM category WHERE name='Herramientas'), 2999.99, FALSE),
('Fertilizante Líquido para Plantas', (SELECT id FROM category WHERE name='Sustratos y Fertilizantes'), 1499.99, FALSE),
('Regadera de Metal', (SELECT id FROM category WHERE name='Herramientas'), 799.99, TRUE),
('Planta Suculenta Echeveria', (SELECT id FROM category WHERE name='Plantas de Interior'), 899.99, FALSE),
('Set de Muebles de Jardín Rústico', (SELECT id FROM category WHERE name='Muebles de Jardín'), 12999.99, FALSE),
('Decoración de Jardín con Iluminación LED', (SELECT id FROM category WHERE name='Decoración de Jardín'), 3499.99, TRUE);
