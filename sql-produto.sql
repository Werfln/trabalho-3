CREATE TABLE produto {
	produto_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
  quantidade INTEGER NOT NULL,
	preco NUMERIC(12,2) NOT NULL,
	data_registro DATE NOT NULL,
	produto_registro INTEGER NOT NULL
}