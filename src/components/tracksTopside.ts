import { reload } from "./reload"
import { tracksLoad } from "./tracksLoad"

const playlist_tracks_place = document.querySelector(".playlist_tracks_place") as HTMLElement

export function tracksTopside(item: any) {
    const top_side_div = document.createElement("div")
    const topside_img = document.createElement("img")

    const about_track_div = document.createElement("div")
    const track_type = document.createElement("p")
    const track_name = document.createElement("h1")
    const track_owner = document.createElement("p")
    const tracks_amount_div = document.createElement("div")
    const spocify_logo = document.createElement("img")
    const spocify_txt = document.createElement("p")
    const tracksAmount = document.createElement("p")
    const tracks_amount_type_txt = document.createElement("p")

    track_type.innerHTML = item.type
    track_name.innerHTML = item.name
    spocify_txt.innerHTML = "Spocify • "
    spocify_logo.src = "/img/spocifyLogo.jpeg"

    if (track_name.innerHTML.length > 25) {
        track_name.innerHTML = track_name.innerHTML.substring(0, 20) + '...';
    }

    if(item.tracks) {
        tracksAmount.innerHTML = item.tracks.total
        tracks_amount_type_txt.innerHTML = "Треков"
    } else if (item.episodes) {
        tracksAmount.innerHTML = item.episodes.total
        tracks_amount_type_txt.innerHTML = "Эпизодов"
    }

    if (item.images) {
        topside_img.src = item.images[0].url;
    } else if (item.album) {
        topside_img.src = item.album.images[0].url;
    }

    if(item.artists) {
        track_owner.innerHTML = item.artists[0].name
    } else if (item.owner) {
        track_owner.innerHTML = item.owner.display_name
    } else if (item.publisher) {
        track_owner.innerHTML = item.publisher
    }

    if(item.tracks) {
        reload(item.tracks.items, tracksLoad, playlist_tracks_place)
    } else if (item.episodes) {
        reload(item.episodes.items, tracksLoad, playlist_tracks_place)
    } else if (item.album) {
        reload([item], tracksLoad, playlist_tracks_place)
    } else {
        reload(item.itmes, tracksLoad, playlist_tracks_place)
    }
    

    about_track_div.classList.add("about_track_div_topSide")
    tracks_amount_div.classList.add("tracks_amount_div")
    topside_img.className = "topsideTracks_img"
    spocify_logo.className = "spocify_logo_topSide"
    track_owner.classList.add("topsideTrOwner")
    track_name.classList.add("topsideTrName")
    track_type.classList.add("topside_trTope")
    top_side_div.classList.add("top_side_div")


    tracks_amount_div.append(spocify_logo, spocify_txt, tracksAmount, tracks_amount_type_txt)
    about_track_div.append(track_type, track_name, track_owner, tracks_amount_div)
    top_side_div.append(topside_img, about_track_div)
    
    return top_side_div
}