function exibeContatos() {
    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.data.length; i++) {
       let contato = db.data[i];
       $("#card span").append(`${contato.campoNome}`);
    }
 }
 function teste() {
    exibeContatos();
 }

 setTimeout(() => {
    db.data.forEach((element, home) => {
       document.querySelector(".teste").innerHTML += `

       <div class="container">
          <div class="row">
                <div class="col-md-12">
                </div>
                <div class="col-sm-12">
                <img src="${element.campoImg}"> 
                <h4 class="card-title">
                <div class="card-header">
                <h3>${element.campoNome}</h3>
                <br>${element.campoIdade} anos.
                </div>
                <br>
                   <div class="form-group">
                   <h4><label for="comentario">Comentario: ${element.campoPost}</label></h4>
                   <div class="col-lg-4 col-md-6 mb-4">
                   </div><br>
                   <p class="card-text">${element.data}</p>
                   <textarea class="form-control" rows="4" id="comentario" placeholder="Comentar a publicacao"></textarea>
                   <div class="form-group span7 text-center col-md-12">
                   <button type="submit" id= "btnInsert" value="submit" class="btn btn-primary">Enviar</button>
                   <button type="submit" id= "btnInsert" value="submit" class="btn btn-primary" align="right">Like</button>
                   <span class="click-text"><a id="clicks"></span>
                   </div>
                </div>
                <hr>
                </div><br>
                <div class="col-sm">
                </div>
          </div>
    </div>
       `;
    });
 }, 500);
 let likes = 0;

 document.getElementById("clicks").innerHTML = likes;

 $('.like-counter').click(function() {
   likes += 1;
   document.getElementById("clicks").innerHTML = likes;
   $('.like-counter').addClass("liked");
 });