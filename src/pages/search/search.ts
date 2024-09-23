import { addleftAside } from "../../components/leftaside";
import { reload } from "../../components/reload";
import { rightAside } from "../../components/rightaside";
import { getData } from "../../lib/getData";
import { categLoad } from "../../components/categories";
import { showsLoad } from "../../components/shows";
import { footerLoad } from "../../components/footer";
import { adaptedMenu } from "../../components/adaptedMenu";
import { addPlayer } from "../../components/player";
import { adaptedPlayer } from "../../components/adaptedPlayer";
import { adaptedHeader } from "../../components/adaptedheader";

location.assign("/src/pages/search/")

const left_aside = document.querySelector(".left_aside") as HTMLElement
const right_aside_place = document.querySelector(".right_aside_pl") as HTMLElement
const categs_place = document.querySelector(".categs_place") as HTMLElement
const search_inp = document.querySelector(".search_inp") as HTMLInputElement
const search_result_place = document.querySelector(".search_result_place") as HTMLElement
const sectionsFooter = document.querySelector(".sectionsFooter") as HTMLElement
const player_section = document.querySelector(".player_section") as HTMLElement
const adapted_nav_menu = document.querySelector(".adapted_nav_menu") as HTMLElement
const adapted_player_place = document.querySelector(".adapted_player_place") as HTMLElement
const adapted_headerPlace = document.querySelector(".adapted_headerPlace") as HTMLElement


getData("/browse/categories?limit=50")
.then(res => {
    console.log(res);
    reload(res.categories.items, categLoad, categs_place);
    return getData("/browse/categories?limit=1&offset=50");
})
.catch(err => {
    console.error(err);
});


const savedTrack = localStorage.getItem('currentTrack');
if (savedTrack) {
    const { id, type } = JSON.parse(savedTrack);
    getData(`/${type}/${id}`)
        .then(res => {
            reload([res], rightAside, right_aside_place);
            reload([res], addPlayer, player_section);
            reload([res], adaptedPlayer, adapted_player_place);
        });
} else {
    getData("/shows/1WErgoXiZwgctkHLzqU6nf")
    .then(res => {
        reload([res], rightAside, right_aside_place)
    })
}


function debounce(func: any, timeout = 600) {
    let timer: any; 
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

const debouncedSearch = debounce((e: any) => {
    getData(`/search?q=${encodeURIComponent(e.target.value)}&type=track,artist,album,show`)
    .then(res => {
        console.log(res);
        reload(res.artists.items, showsLoad, search_result_place)
        reload(res.tracks.items, showsLoad, search_result_place)
        reload(res.shows.items, showsLoad, search_result_place)
        reload(res.albums.items, showsLoad, search_result_place)
    })
}, 600);

search_inp.onkeyup = debouncedSearch;

adaptedHeader(adapted_headerPlace)
adaptedMenu(adapted_nav_menu)
footerLoad(sectionsFooter)
addleftAside(left_aside)