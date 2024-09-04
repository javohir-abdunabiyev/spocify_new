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
    const for_names_addliketracks = document.createElement("div")
    const same_name_artist_div = document.createElement("div")
    const same_name = document.createElement("h1")
    const artist = document.createElement("p")
    const addlike_track_Div = document.createElement("div")
    const svedeniya = document.createElement("div")
    const svedeniya_top_side_div = document.createElement("div")
    const svedeniya_h1 = document.createElement("h1")
    const show_all_svedeniya = document.createElement("button")
    const ispolnitel_sub_div = document.createElement("div")
    const ispolnitel_div = document.createElement("div")
    const sam_ispolnitel = document.createElement("a")
    const producer_txt = document.createElement("p")
    const subscribe_btn = document.createElement("button")
    const next_in_queue_div = document.createElement("div")
    const next_in_queue_top_side_div = document.createElement("div")
    const next_txt = document.createElement("p")
    const show_all_txt = document.createElement("p")


    next_in_queue_top_side_div.classList.add("next_in_queue_top_side_div")
    show_all_txt.classList.add("show_all_queue_text")
    next_txt.classList.add("next_text")
    next_in_queue_div.classList.add("svedeniya_div")
    next_in_queue_div.classList.add("next_in_queue_div")
    aside_place.classList.add("svedeniya_aside")
    ispolnitel_sub_div.classList.add("ispolnitel_sub_div")
    subscribe_btn.classList.add("subscribe_btn")
    producer_txt.classList.add("producer_txt")
    ispolnitel_div.classList.add("ispolnitel_div")
    sam_ispolnitel.classList.add("sam_ispolnitel")
    svedeniya_top_side_div.classList.add("svedeniya_top_side_div")
    svedeniya.classList.add("svedeniya_div")
    for_names_addliketracks.classList.add("for_names_addliketracks")
    addlike_track_Div.classList.add("addlike_track_Div")
    close_aside.classList.add("close_asideBtn")
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
    addlike_track_Div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path></svg>`
    svedeniya_h1.innerHTML = "Сведения"
    show_all_svedeniya.innerHTML = "Показать все"
    producer_txt.innerHTML = "Основной Исполнитель, Композитор"
    subscribe_btn.innerHTML = "Подписаться"
    next_txt.innerHTML = "Далее в очереди"
    show_all_txt.innerHTML = "Показать очередь"
    
    
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
        sam_ispolnitel.innerHTML = item.artists[0].name
    } else if (item.owner) {
        artist.innerHTML = item.owner.display_name
        sam_ispolnitel.innerHTML = item.owner.display_name
        producer_txt.innerHTML = "Композитор"
    } else if (item.publisher) {
        artist.innerHTML = item.publisher
        sam_ispolnitel.innerHTML = item.publisher
    }

    next_in_queue_top_side_div.append(next_txt, show_all_txt)
    next_in_queue_div.append(next_in_queue_top_side_div)
    ispolnitel_div.append(sam_ispolnitel, producer_txt)
    ispolnitel_sub_div.append(ispolnitel_div, subscribe_btn)
    svedeniya_top_side_div.append(svedeniya_h1, show_all_svedeniya)
    svedeniya.append(svedeniya_top_side_div, ispolnitel_sub_div)
    same_name_artist_div.append(same_name, artist)
    for_names_addliketracks.append(same_name_artist_div, addlike_track_Div)
    close_aside.append(close_aside_img)
    second_div.append(settings, close_aside)
    topside_div.append(track_name, second_div)
    aside_place.append(topside_div, track_img, for_names_addliketracks, svedeniya, next_in_queue_div)

    return aside_place
}