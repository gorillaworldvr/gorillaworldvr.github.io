const url = "https://api.gorillaworldvr.com/";
const imageBase = "https://api.gorillaworldvr.com/api/images/v1/";

async function api(endpoint){
    var uri = url + endpoint;
    var response = await fetch(uri);
    if (!response.ok){
        throw new Error("Someting went wrong: " + response.status);
    }

    return await response.json();
}

async function apiString(endpoint){
    var uri = url + endpoint;
    var response = await fetch(uri);
    if (!response.ok){
        throw new Error("Someting went wrong: " + response.status);
    }

    return response.text();
}