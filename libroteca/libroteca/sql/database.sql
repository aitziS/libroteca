create database Libroteca;

use Libroteca;

create table libros(
    id int primary key auto_increment,
    titulo varchar(100),
    autor varchar(100),
    editorial varchar(100),
    isbn varchar(100),
    precio float,
    descripcion text,
    stock int
);

create table clientes (
    id int primary key auto_increment,
    nombre varchar(100),
    apellidos varchar(100),
    email varchar(100),
    telefono varchar(100),
    tarjeta varchar(100),
    contrasena varchar(100)
);

/* insert en libros de El Nombre del Viento, El Príncipe Cruel, Memorias de Idhún, El Imperio Final y Origen (de Dan Brown) */

insert into libros (titulo, autor, editorial, isbn, precio, descripcion, stock) values
('El Nombre del Viento', 'Patrick Rothfuss', 'Plaza & Janés', '978-84-01-33781-1', 20.00, 'El Nombre del Viento es una novela de fantasía escrita por Patrick Rothfuss y es el primer libro de la trilogía Crónica del asesino de reyes. La historia se centra en la vida de Kvothe, un joven estudiante de magia y músico, que se convierte en el personaje más famoso de su mundo. La novela está narrada en primera persona por el propio Kvothe, quien relata su vida a un cronista llamado Devan Lochees.', 10),
('El Príncipe Cruel', 'Holly Black', 'Alfaguara', '978-84-204-2713-3', 18.00, 'El príncipe cruel es una novela de fantasía escrita por Holly Black. La historia se centra en Jude, una joven humana que vive en el mundo de las hadas. Jude es una joven humana que vive en el mundo de las hadas, un lugar donde la traición y la ambición son moneda corriente. Para sobrevivir, la joven debe aprender a ser más astuta que los propios habitantes del reino.', 10),
('Memorias de Idhún', 'Laura Gallego', 'SM', '978-84-675-3844-3', 15.00, 'Memorias de Idhún es una trilogía de novelas de fantasía escrita por Laura Gallego. La historia se centra en Jack, un joven terrícola que descubre que es un viajero, un ser capaz de viajar entre dimensiones. Jack se une a Victoria, una joven maga, y a Kirtash, un joven asesino, para salvar Idhún, un mundo mágico que está siendo invadido por los sheks, seres malignos que buscan destruirlo.', 10),
('El Imperio Final', 'Brandon Sanderson', 'Nova', '978-84-663-0007-3', 22.00, 'El Imperio Final es una novela de fantasía escrita por Brandon Sanderson. La historia se centra en Vin, una joven que descubre que es una alomántica, una persona capaz de quemar metales y obtener poderes sobrenaturales. Vin se une a Kelsier, un ladrón que busca derrocar al Lord Legislador, el gobernante del Imperio Final, un mundo donde las cenizas caen del cielo y la oscuridad reina en la noche.', 10),
('Origen', 'Dan Brown', 'Planeta', '978-84-08-17689-9', 25.00, 'Origen es una novela de misterio y suspense escrita por Dan Brown. La historia se centra en Robert Langdon, un profesor de simbología que viaja a España para asistir a una presentación de un descubrimiento científico que promete responder a dos preguntas fundamentales de la humanidad: ¿De dónde venimos? ¿A dónde vamos? Sin embargo, la presentación se ve interrumpida por un asesinato y Langdon se ve envuelto en una carrera contrarreloj para descubrir la verdad.', 10);

/*insert de un usuario Aitziber y uno Yeray en clientes*/

insert into clientes (nombre, apellidos, email, telefono, tarjeta, contrasena) values
('Aitziber', 'Solis', 'aitzisolba@gmail.com', '666666666', '123456789', '@Zonzamas1234'),
('Yeray', 'Marrero', 'arimey15@gmail.com', '666666666', '987654321', '@Zonzamas1234');