const urlParams = new URLSearchParams(window.location.search);

const defaultMap = document.getElementById("map");
document.getElementById("maps").removeChild(defaultMap)

loadPlayer(urlParams.get('name'));;

async function loadPlayer(name){
    var player = await api("api/players/v1/" + name);
    if (player == null){
        document.getElementById("player").remove();
        document.getElementById("baseMaps").remove();
        return;
    }

    document.getElementById("notFound").remove();

    console.log(player);
    document.getElementById("username").innerHTML = player.Username;
    document.getElementById("image").src = imageBase + player.Image;
    document.getElementById("createdAt").innerHTML = "Joined: " + player.CreatedAt.toString("DD-MM-YYYY HH:MM");
    loadMaps(player.Id);
}

async function loadMaps(id){
    var maps = await api("api/maps/v1/creator/" + id);
    console.log(maps);
    maps.forEach(map => {
        console.log(map.Name);
        var element = defaultMap.cloneNode(true);
        element.id = "map" + map.Id;
        getChildById(element, "mapName").innerHTML = map.Name;
        getChildById(element, "mapImage").src = imageBase + map.Image;
        getChildById(element, "mapDescription").innerHTML = map.Description;

        document.getElementById("maps").appendChild(element);
    });
}

function getChildById(node, childId){
    arr = [];
    addToArray(node);

    for (const child of arr){
        if (child.id == childId){
            //console.log(child.tagName);
            return child;
        }
    }
}

function addToArray(node){
    for (const child of node.children){
        arr.push(child);
        addToArray(child);
    }
}