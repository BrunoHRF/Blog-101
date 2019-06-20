function init() {
    var y = document.getElementById("getimage");
    y.addEventListener('change', loadimage, false);

     $("#form-contato").submit(function() {
         let campoNome = $("#inputNome").val();
         let campoIdade = $("#inputIdade").val();
         let campoCidade = $("#inputCidade").val();
         let campoPost = $("#inputPost").val();
         let data = new Date().toString();
         let campoImg = document.getElementById('jsonstore').innerHTML;

         let contato = {
             "inputNome": campoNome,
             "inputIdade": campoIdade,
             "inputCidade": campoCidade,
             "DataAtual": data,
             "inputPost": campoPost,
             "jsonstore": campoImg,
         }
         insertContato(contato);
     });
 }

 function imageHandler(e2) {
     var store = document.getElementById('imgstore');
     store.innerHTML = '<img src="' + e2.target.result + '">';

     var jsonstore = document.getElementById('jsonstore');
     jsonstore.innerHTML = `{ "img": "${e2.target.result}" }`;

 }

 function loadimage(e1) {
     var filename = e1.target.files[0];
     var fr = new FileReader();
     fr.onload = imageHandler;
     fr.readAsDataURL(filename);
 }
