import { showsLoad } from "./components/shows";
import { getData } from "./lib/idnex";
import { reload } from "./lib/reload";
import { footerLoad } from "./components/footer";
import { addleftAside } from "./components/leftaside";
import { rightAside } from "./components/rightaside";
// import { rightAside } from "./components/rightaside";

let token = localStorage.getItem("access_token");
const showsPlace = document.querySelector(".shows_Section") as HTMLElement
const top_playlistsPlace = document.querySelector(".top_playlistsSection") as HTMLElement
const popular_radio_place = document.querySelector(".popular_radio") as HTMLElement
const rec_podbors_place = document.querySelector(".rec_podbors") as HTMLElement 
const spwrapped_place = document.querySelector(".spwrapped_div") as HTMLElement 
const main_page_footer = document.querySelector(".sectionsFooter") as HTMLElement
const center_section = document.querySelector(".center_section") as HTMLElement
const left_aside_place = document.querySelector(".main_section") as HTMLElement
const right_aside_place = document.querySelector(".right_aside_pl") as HTMLElement

let slice_count = 5


// svedeniya_aside

if (!token) {
  location.assign("/src/pages/Login/")
}


getData("/shows/1WErgoXiZwgctkHLzqU6nf")
    .then(res => {
        reload([res], rightAside, right_aside_place)
    })

getData("/search?type=show&q=show")
.then(res => {
  console.log(res.shows.items);
  if(center_section.style.width <= "900px") {
    slice_count = 4
  }
  reload(res.shows.items.slice(0, slice_count), showsLoad, showsPlace)
})

getData("/browse/categories/toplists/playlists")
.then(res => {
  console.log(res);
  if(center_section.style.width <= "900px") {
    slice_count = 4
  }
  reload(res.playlists.items.slice(0, slice_count), showsLoad, top_playlistsPlace)
})

getData("/search?q=radio&type=playlist&limit=10")
.then(res => {
  console.log(res.playlists.items.slice(0, 5));
  reload(res.playlists.items.slice(0 , slice_count), showsLoad, popular_radio_place)
})

getData("/recommendations?seed_genres=rock,pop&limit=10")
.then(res => {
  console.log(res.tracks);
  reload(res.tracks.slice(0, slice_count), showsLoad, rec_podbors_place)
})

getData("/browse/categories/toplists/playlists")
.then(res => {
  console.log(res);
  reload(res.playlists.items.slice(0, slice_count), showsLoad, spwrapped_place)
})

footerLoad(main_page_footer)
addleftAside(left_aside_place)