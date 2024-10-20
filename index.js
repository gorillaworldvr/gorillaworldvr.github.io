const url = "https://api.gorillaworldvr.com/";

load();

async function load(){
    var config = await api("api/config/v1");
    console.log(config.Message);
    document.getElementById("motd").innerHTML = config.Message;
}

async function api(endpoint){
    var uri = url + endpoint;
    var response = await fetch(uri);
    if (!response.ok){
        throw new Error("Someting went wrong: " + response.status);
    }

    return await response.json();
}