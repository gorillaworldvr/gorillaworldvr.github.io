load();

async function load(){
    var config = await apiString("api/maps/v1/count");
    console.log(config);
    document.getElementById("mapCount").innerHTML = config;
}