import { showsLoad } from "./components/shows";
import { getData } from "./lib/idnex";
import { reload } from "./lib/reload";
import { footerLoad } from "./components/footer";
// import { rightAside } from "./components/rightaside";

let token = localStorage.getItem("access_token");
const svg_div_one = document.querySelector(".svg_img_one") as HTMLElement
const svg_div_two = document.querySelector(".svg_img_two") as HTMLElement
const showsPlace = document.querySelector(".shows_Section") as HTMLElement
const top_playlistsPlace = document.querySelector(".top_playlistsSection") as HTMLElement
const popular_radio_place = document.querySelector(".popular_radio") as HTMLElement
const rec_podbors_place = document.querySelector(".rec_podbors") as HTMLElement 
const spwrapped_place = document.querySelector(".spwrapped_div") as HTMLElement 
const main_page_footer = document.querySelector(".sectionsFooter") as HTMLElement
const center_section = document.querySelector(".center_section") as HTMLElement
const rightAside_close = document.querySelector(".close_asideBtn") as HTMLButtonElement
const svedeniya_aside = document.querySelector(".svedeniya_aside") as HTMLElement
let slice_count = 5
let search_svg_color = "grey"




if (!token) {
  location.assign("/src/pages/Login/")
}


svg_div_one.innerHTML = `<svg width="24" height="24" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 27C25 27.5523 24.5523 28 24 28H16.2778C15.7255 28 15.2778 27.5523 15.2778 27V19.0526C15.2778 18.5003 14.8301 18.0526 14.2778 18.0526H10.7222C10.1699 18.0526 9.7222 18.5003 9.7222 19.0526V27C9.7222 27.5523 9.27448 28 8.7222 28H1C0.447716 28 0 27.5523 0 27V7.89769C0 7.54272 0.188173 7.21436 0.494433 7.0349L11.9962 0.295236C12.3075 0.112825 12.6929 0.112251 13.0047 0.293734L24.503 6.98543C24.8107 7.16451 25 7.49369 25 7.84972V27Z" fill="white"/>
</svg>
`

svg_div_two.innerHTML = `<svg width="24" height="24" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7747 20.3561L27.5924 26.4934C28.1511 27.0828 28.1332 28.0268 27.5524 28.5933C26.9808 29.1511 26.078 29.1329 25.5282 28.5526L19.7061 22.4083C17.7272 23.93 15.4956 24.7673 13.0114 24.9203C11.3514 25.0226 9.74381 24.792 8.18858 24.2288C6.63335 23.6655 5.2766 22.8625 4.11833 21.8199C2.96006 20.7772 2.01249 19.5057 1.27561 18.0055C0.538736 16.5053 0.120961 14.9125 0.0222852 13.2271C-0.0763905 11.5418 0.152625 9.90916 0.709331 8.32924C1.26604 6.74932 2.05852 5.37069 3.08678 4.19334C4.11504 3.01599 5.36839 2.05225 6.84685 1.30212C8.3253 0.551984 9.89446 0.125799 11.5543 0.02356C13.2142 -0.0786793 14.8218 0.151834 16.3771 0.715101C17.9324 1.27837 19.2892 2.08134 20.4474 3.12402C21.6055 4.16669 22.5531 5.43815 23.2901 6.93838C24.027 8.43862 24.4448 10.0314 24.5434 11.7168C24.606 12.7861 24.5356 13.8403 24.3321 14.8793C24.1287 15.9184 23.8096 16.8946 23.3747 17.8079C22.9399 18.7212 22.4066 19.5706 21.7747 20.3561ZM12.84 21.9912C14.1107 21.9129 15.3094 21.5854 16.436 21.0085C17.5626 20.4317 18.519 19.6933 19.305 18.7934C20.091 17.8934 20.6986 16.8412 21.1279 15.6365C21.5572 14.4319 21.7341 13.1845 21.6586 11.8944C21.5831 10.6042 21.262 9.38751 20.6953 8.24424C20.1286 7.10096 19.4026 6.13081 18.5173 5.33378C17.632 4.53674 16.5964 3.92105 15.4106 3.48669C14.2247 3.05232 12.9965 2.87428 11.7258 2.95255C10.4551 3.03081 9.25646 3.35835 8.12981 3.93514C7.00317 4.51194 6.04682 5.25035 5.26078 6.15038C4.47473 7.0504 3.86709 8.10268 3.43783 9.30721C3.00858 10.5117 2.83171 11.7591 2.90721 13.0494C2.98272 14.3396 3.3038 15.5563 3.87045 16.6995C4.4371 17.8427 5.16312 18.8128 6.04853 19.6099C6.93394 20.407 7.96951 21.0227 9.15524 21.457C10.341 21.8913 11.5692 22.0694 12.84 21.9912Z" fill="${search_svg_color}"/>
</svg>
`

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