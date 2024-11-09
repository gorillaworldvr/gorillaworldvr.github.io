load();

async function load(){
    var config = await api("api/config/v1");
    console.log(config.Message);
    document.getElementById("motd").innerHTML = config.Message;
}