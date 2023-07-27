window.onload = adminScript()

function adminScript() {
    var admin = localStorage.getItem("admin");
    if(!admin){
        admin = prompt('Vul hier de geheime code in');
        localStorage.setItem("admin", admin);
    };
    if(admin === "Thomas1181JX"){
        document.getElementById('adminButton').style.display = 'initial';
    };
};