// import { getData } from "../lib/idnex";

export function rightAside(item: any) {
    const aside_place = document.createElement("div")
    const topside_div = document.createElement("div")
    const track_name = document.createElement("h1")
    const second_div = document.createElement("div")
    const settings = document.createElement("div")
    const close_aside = document.createElement("button")
    const close_aside_img = document.createElement("div")
    const track_img = document.createElement("img")
    const same_name = document.createElement("h1")
    const artist = document.createElement("p")

    if (item.album) {
        track_img.src = item.album.images[2].url;
    } else if(item.images.length <= 1) {
        track_img.src = item.images[0].url
    } else {
        track_img.src = item.images[1].url
    }

    if (item.album) {
        track_img.src = item.album.images[1].url;
    }

    if(item.artists) {
        artist.innerHTML = item.artists[0].name
    } else if (item.owner) {
        artist.innerHTML = item.owner.display_name
    } else if (item.publisher) {
        artist.innerHTML = item.publisher
    }


    same_name.classList.add("same_name")
    settings.classList.add("settings")
    topside_div.classList.add("topside_div")
    second_div.classList.add("second_div")
    track_img.classList.add("track_img")
    artist.classList.add("artist")
    same_name.classList.add("same_name")
    track_name.classList.add("track_name")
    close_aside_img.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path></svg>`
    track_name.innerHTML = item.name
    same_name.innerHTML = item.name
    settings.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>`
    


    close_aside.append(close_aside_img)
    second_div.append(settings, close_aside)
    topside_div.append(track_name, second_div)
    aside_place.append(topside_div, track_img, same_name, artist)

    return aside_place
}