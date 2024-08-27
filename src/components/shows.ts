import { getData } from "../lib/idnex";
import { reload } from "../lib/reload";
import { rightAside } from "./rightaside";

const rightaside_place = document.querySelector(".svedeniya_aside") as HTMLElement
const center_section = document.querySelector(".center_section") as HTMLElement


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

    publisherName.innerHTML = item.publisher

    if (item.images) {
        img.src = item.images[0].url;
    } else if (item.album) {
        img.src = item.album.images[0].url;
    }
        
    name.innerHTML = item.name;
    
    if (name.innerHTML.length > 40) {
        name.innerHTML = name.innerHTML.substring(0, 30) + '...';
    }
    if(publisherName.innerHTML.length > 30) {
        publisherName.innerHTML = publisherName.innerHTML.substring(0, 20) + '...'
    }

    if(!item.publisher) {
        name.classList.add("publisher")
        publisherName.style.display = "none"
    }


    playbtn_div.onclick = () => {

        getData(`/${item.type + "s"}/${item.id}`)
            .then(res => {
                reload([res], rightAside, rightaside_place)
            })    
    }



    if(center_section.style.width > "900px") {
        img.classList.remove("showImg_bigger")
        div.classList.remove("sectionsimgdiv_bigger")
    } else if(center_section.style.width <= "900px") {
        img.classList.add("showImg_bigger")
        div.classList.add("sectionsimgdiv_bigger")
    }

    playbtn_div.append(playbtn)

    div.append(img, name, playbtn_div, publisherName);

    return div;
}
