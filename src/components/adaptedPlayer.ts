export function adaptedPlayer(item: any) {
    const div = document.createElement("div")

    const img_name_div = document.createElement("div")
    const img = document.createElement("img")
    const names_div = document.createElement("div")
    const name = document.createElement("p")
    const publisher = document.createElement("p")

    const play_Btn = document.createElement("button")
    const play_Btn_img = document.createElement("img")


    play_Btn.onclick = () => {
        if(play_Btn.classList.contains("play")) {
            play_Btn_img.src = "/img/pausebtn.png"
            play_Btn.classList.remove("play")
        } else {
            play_Btn_img.src = "/img/playbtn.png"
            play_Btn.classList.add("play")
        }
    }

    if (name.innerHTML.length > 40) {
        name.innerHTML = name.innerHTML.substring(0, 30) + '...';
    }

    if (item.album) {
        img.src = item.album.images[2].url;
    } else if(item.images.length <= 1) {
        img.src = item.images[0].url
    } else {
        img.src = item.images[1].url
    }

    if(item.artists) {
        publisher.innerHTML = item.artists[0].name
    } else if (item.owner) {
        publisher.innerHTML = item.owner.display_name
    } else if (item.publisher) {
        publisher.innerHTML = item.publisher
    }


    img.classList.add("adapted_track_cls")
    img_name_div.classList.add("img_name_div_adapted")
    div.classList.add("adapted_player_div")

    play_Btn.append(play_Btn_img)
    names_div.append(name, publisher)
    img_name_div.append(img, names_div)
    div.append(img_name_div, play_Btn)

    return div
}