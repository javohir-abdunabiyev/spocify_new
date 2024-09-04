import { addleftAside } from "../../components/leftaside";
import { reload } from "../../components/reload";
import { rightAside } from "../../components/rightaside";
import { getData } from "../../lib/getData";

location.assign("/src/pages/search/")

const left_aside = document.querySelector(".left_aside") as HTMLElement
const right_aside_place = document.querySelector(".right_side") as HTMLElement

getData("/shows/1WErgoXiZwgctkHLzqU6nf")
    .then(res => {
        reload([res], rightAside, right_aside_place)
    })

const savedTrack = localStorage.getItem('currentTrack');
if (savedTrack) {
    const { id, type } = JSON.parse(savedTrack);
    getData(`/${type}/${id}`)
        .then(res => {
            reload([res], rightAside, right_aside_place);
        });
}

addleftAside(left_aside)