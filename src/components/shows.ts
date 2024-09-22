import { getData } from "../lib/getData";
import { reload } from "./reload";
import { rightAside } from "./rightaside";
import { addPlayer } from "./player";
import { adaptedPlayer } from "./adaptedPlayer";

const center_section = document.querySelector(".center_section") as HTMLElement
const player_section = document.querySelector(".player_section") as HTMLElement
const rightaside_place = document.querySelector(".right_aside_pl") as HTMLElement
const adapted_player_place = document.querySelector(".adapted_player_place") as HTMLElement


export function showsLoad(item: any) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const playbtn_div = document.createElement("div")
    const playbtn = document.createElement("img")
    const publisherName = document.createElement("p")

    img.className = "showImg";
    name.classList.add("showname");
    div.classList.add("sectionsimgdiv");
    playbtn_div.classList.add("playbtn_div")
    playbtn.src = "/img/plbtn.svg"
    playbtn.classList.add("playbtn")
    publisherName.classList.add("publisher")

    if (item.images) {
        img.src = item.images[0].url;
    } else if (item.album) {
        img.src = item.album.images[0].url;
    }
        
    name.innerHTML = item.name;
    
    if (name.innerHTML.length > 40) {
        name.innerHTML = name.innerHTML.substring(0, 30) + '...';
    }

    if(item.artists) {
        publisherName.innerHTML = item.artists[0].name
    } else if (item.owner) {
        publisherName.innerHTML = item.owner.display_name
    } else if (item.publisher) {
        publisherName.innerHTML = item.publisher
    } else {
        publisherName.innerHTML = "Исполнитель"
        img.style.borderRadius = "50%"
    }


    if(publisherName.innerHTML.length > 30) {
        publisherName.innerHTML = publisherName.innerHTML.substring(0, 20) + '...'
    }



    playbtn_div.onclick = (e) => {
        e.stopPropagation();
        const trackInfo = {
            id: item.id,
            type: item.type + "s"
        };
        localStorage.setItem('currentTrack', JSON.stringify(trackInfo));

        getData(`/${item.type + "s"}/${item.id}`)
            .then(res => {
                reload([res], rightAside, rightaside_place)
                reload([res], addPlayer, player_section)
                reload([res], adaptedPlayer, adapted_player_place)
            })
    }


    const width = parseFloat(center_section.style.width);
    if (width > 900) {
        img.classList.remove("showImg_bigger");
        div.classList.remove("sectionsimgdiv_bigger");
    } else {
        img.classList.add("showImg_bigger");
        div.classList.add("sectionsimgdiv_bigger");
    }

    div.onclick = () => {
        const selectedTrack = {
            id: item.id,
            type: item.type + "s"
        };
        localStorage.setItem('selectedTrack', JSON.stringify(selectedTrack));
        location.assign(`/src/pages/tracks/?id=${item.id}`)
    }

    playbtn_div.append(playbtn)

    div.append(img, name, playbtn_div, publisherName);

    return div;
}