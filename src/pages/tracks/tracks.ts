import { addleftAside } from "../../components/leftaside.ts";
import { getData } from "../../lib/getData.ts";
import { rightAside } from "../../components/rightaside.ts";
import { reload } from "../../components/reload.ts";
import { header } from "../../components/header.ts";
import { tracksTopside } from "../../components/tracksTopside.ts";
import { addminiplayer } from "../../components/miniplayer.ts";
import { footerLoad } from "../../components/footer.ts";
import { adaptedMenu } from "../../components/adaptedMenu.ts";
import { tracksLoad } from "../../components/tracksLoad.ts";


let id: any = location.search.split('=')
id = id[id.length - 1]
location.assign(`/src/pages/tracks/?id=${id}`);

let token = localStorage.getItem("access_token");

if (!token) {
  location.assign("/src/pages/Login/")
}

const mini_player = document.querySelector(".mini_player") as HTMLElement
const right_aside_place = document.querySelector(".right_aside_place") as HTMLElement
const left_aside = document.querySelector(".left_aside") as HTMLElement
const headerPlace = document.querySelector(".headerPlace") as HTMLElement
const tracks_section = document.querySelector(".tracks_section") as HTMLElement
const pages_footer = document.querySelector(".sectionsFooter") as HTMLElement
const selectedTrack = localStorage.getItem('selectedTrack')
const savedTrack = localStorage.getItem('currentTrack');
const adapted_nav_menu = document.querySelector(".adapted_nav_menu") as HTMLElement
const playlist_tracks_place = document.querySelector(".playlist_tracks_place") as HTMLElement


if (savedTrack) {
    const { id, type } = JSON.parse(savedTrack);
    getData(`/${type}/${id}`)
        .then(res => {
            reload([res], rightAside, right_aside_place);
        });
} else {
    getData("/shows/1WErgoXiZwgctkHLzqU6nf")
    .then(res => {
        reload([res], rightAside, right_aside_place)
    })
}



if(selectedTrack) {
    const {id, type} = JSON.parse(selectedTrack)
    getData(`/${type}/${id}`)
        .then(res => {
            console.log(res);
            reload([res], tracksTopside, tracks_section)
        })
        getData(`/artists/${id}/albums`)
        .then(res => {
            console.log(res);
            reload(res.items, tracksLoad, playlist_tracks_place)
        }
        )
}
addminiplayer(mini_player)
header(headerPlace)
addleftAside(left_aside)
footerLoad(pages_footer)
adaptedMenu(adapted_nav_menu)