window.onload = () => {
    let map = document.getElementById("mapRestaurant")

    let map1 = document.querySelector("#changementMap1")
    map1.addEventListener("click", function(){
        map.src = "Images/map1.png"
    })

    document.querySelector("#changementMap2").addEventListener("click", function(){
        map.src = "Images/map2.png"
    })

    document.querySelector("#changementMap3").addEventListener("click", function(){
        map.src = "Images/map3.png"
    })
}