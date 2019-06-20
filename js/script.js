function get_db(){
    let blog_db = JSON.parse(localStorage.getItem('db'));
    if (!blog_db) {
      blog_db = db;
    };
    return blog_db;
  }
function exibeContatos() {
    blog_db = get_db();
    $("#grid-main-user").html("");
    var i;
    for (i = 0; i < blog_db.data.length; i++) {
    contato = blog_db.data[i];
    $("#grid-main-user").append(`
    <div class="w3-container">
        <div class="w3-card-4 onclick="goToProfile(${contato.id})" style="width:70%">
            <header class="w3-container w3-light-grey">
            <h3>${contato.nome}</h3>
            </header>
            <div class="w3-container">
            <p>${contato.data}</p>
            <hr>
            <p></p><br>
            </div>
            <button class="w3-buttonw3-teal">Like</button>
        </div>
    </div>
    `   );
    }
}
function goToProfile(id){
    location.href = `user.html?id=${id}`;
}
function build_profile_page(){
    urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
    blog_db = get_db();
    user = blog_db.data[id-1];
    $("#grid-main-user").append(`
    <div class="w3-container">
        <div class="w3-card-4 onclick="goToProfile(${user.id}" style="width:70%">
            <header class="w3-container w3-light-grey">
            <h3>${user.nome}</h3>
            </header>
            <div class="w3-container">
            <p>${user.data}</p>
            <hr>
            <p></p><br>
            </div>
            <button class="w3-buttonw3-teal">Like</button>
        </div>
    </div>
    `   );
}