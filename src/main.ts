import { showsLoad } from "./components/shows";
import { getData } from "./lib/getData";
import { reload } from "./components/reload";
import { footerLoad } from "./components/footer";
import { addleftAside } from "./components/leftaside";
import { rightAside } from "./components/rightaside";
import { header } from "./components/header";
import { adaptedHeader } from "./components/adaptedheader";
import { adaptedMenu } from "./components/adaptedMenu";
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from "./pages/Login";



location.assign("/")

let token = localStorage.getItem("access_token");
const showsPlace = document.querySelector(".shows_Section") as HTMLElement
const top_playlistsPlace = document.querySelector(".top_playlistsSection") as HTMLElement
const popular_radio_place = document.querySelector(".popular_radio") as HTMLElement
const rec_podbors_place = document.querySelector(".rec_podbors") as HTMLElement 
const spwrapped_place = document.querySelector(".spwrapped_div") as HTMLElement 
const main_page_footer = document.querySelector(".sectionsFooter") as HTMLElement
const left_aside_place = document.querySelector(".main_section") as HTMLElement
const right_aside_place = document.querySelector(".right_aside_pl") as HTMLElement
const header_place = document.querySelector(".header_place") as HTMLElement
const popular_artists_place = document.querySelector(".popular_artists") as HTMLElement
const adapted_headerPlace = document.querySelector(".adapted_headerPlace") as HTMLElement
const adapted_nav_menu = document.querySelector(".adapted_nav_menu") as HTMLElement
const close_btn = document.querySelector(".close") as HTMLElement
const menuAdapted = document.querySelector(".menuAdapted") as HTMLElement
const exitAcc = document.querySelector(".exitAcc") as HTMLAnchorElement

adaptedMenu(adapted_nav_menu)
header(header_place)
adaptedHeader(adapted_headerPlace)


if (!token) {
  location.assign("/src/pages/Login/")
}


const savedTrack = localStorage.getItem('currentTrack');

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

getData("/search?type=show&q=show")
.then(res => {
  console.log(res.shows.items);
  reload(res.shows.items.slice(0, 20), showsLoad, showsPlace)
})

getData("/browse/categories/toplists/playlists")
.then(res => {
  reload(res.playlists.items.slice(0, 20), showsLoad, top_playlistsPlace)
})

getData("/search?q=radio&type=playlist&limit=10")
.then(res => {
  console.log(res.playlists.items.slice(0, 5));
  reload(res.playlists.items.slice(0 , 20), showsLoad, popular_radio_place)
})

getData("/recommendations?seed_genres=rock,pop&limit=10")
.then(res => {
  console.log(res.tracks);
  reload(res.tracks.slice(0, 20), showsLoad, rec_podbors_place)
})

getData("/browse/categories/toplists/playlists")
.then(res => {
  console.log(res);
  reload(res.playlists.items.slice(0, 20), showsLoad, spwrapped_place)
})

getData("/search?q=a&type=artist&limit=50")
    .then(res => {
      console.log("artists", res);
      reload(res.artists.items.slice(0, 20), showsLoad, popular_artists_place)
    })

close_btn.onclick = () => {
  menuAdapted.classList.remove("active_menuAdapted")
}

exitAcc.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

footerLoad(main_page_footer)
addleftAside(left_aside_place)