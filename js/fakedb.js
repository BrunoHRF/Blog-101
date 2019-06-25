var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
	db = {data: []}
	localStorage.setItem('db', JSON.stringify(db));
};

db.data = [...db.data].reverse();


function insertContato(contato) {
	// Calcula novo Id a partir do último código existente no array
	let novoId = db.data.length > 0 ? db.data[db.data.length - 1].id + 1 : 1;

	let novoContato = {
        "id": novoId,
		"campoNome": contato.inputNome,
		"campoImg": contato.jsonstore,
        "campoIdade": contato.inputIdade,
        "campoCidade": contato.inputCidade,
        "data": contato.DataAtual,
	};

	// Insere o novo objeto no array
	db.data.push(novoContato);

	localStorage.setItem('db', JSON.stringify(db));	
}
