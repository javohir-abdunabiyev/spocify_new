export function addPlayer(item: any) {
    const player_place = document.createElement("div")

    const songName_img_div = document.createElement("div")
    const songImg = document.createElement("img")
    const name_ispolnitel_div = document.createElement("div")
    const name = document.createElement("p")
    const ispolniyel = document.createElement("p")
    const addFav_tracks_btn = document.createElement("button")
    const btn_svg_div = document.createElement("div")
    const main_player_div = document.createElement("div")
    const player_controls_div = document.createElement("div")
    const mix_btn = document.createElement("button")
    const mix_btn_svg_div = document.createElement("div")
    const prev_btn = document.createElement("button")
    const prev_btn_svg_div = document.createElement("div")
    const play_Btn = document.createElement("button")
    const play_Btn_img = document.createElement("img")
    const next_btn = document.createElement("button")
    const next_btn_svg_div = document.createElement("div")
    const replay_btn = document.createElement("button")
    const replay_btn_svg_div = document.createElement("div")
    const player_range = document.createElement("input")


    const player_settings_div = document.createElement("div")

    const now_playing_btn = document.createElement("button")
    const now_playing_btn_svg_div = document.createElement("div")

    const microfone_btn = document.createElement("button")
    const microfone_btn_svg_div = document.createElement("div")

    const queue_btn = document.createElement("button")
    const queue_btn_svg_div = document.createElement("div")

    const device_connect_btn = document.createElement("button")
    const device_connect_btn_svg_div = document.createElement("div")

    const volume_div = document.createElement("div")
    const volume_div_btn = document.createElement("button")
    const volume_div_btn_img_div = document.createElement("img")
    const volume_range = document.createElement("input")

    const display_cover_btn = document.createElement("button")
    const display_cover_btn_svg_div = document.createElement("div")

    const display_not_cover_btn = document.createElement("button")
    const display_not_cover_btn_div = document.createElement("div")



    volume_range.type = "range"
    volume_div_btn_img_div.src = "/img/volumebtn.png"
    player_range.type = "range"
    play_Btn_img.src = "/img/playbtn.png"
    name.innerHTML = item.name
    replay_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>`
    next_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>`
    prev_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>`
    mix_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>`
    btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path></svg>`
    now_playing_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg>`
    microfone_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>`
    queue_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>`
    device_connect_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>`
    display_cover_btn_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path></svg>`
    display_not_cover_btn_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg>`





    volume_div.classList.add("volume_div")
    player_settings_div.classList.add("player_settings_div")
    volume_div_btn_img_div.classList.add("volume_div_btn_img_div")
    player_range.classList.add("player_range")
    player_place.classList.add("player_place")
    play_Btn.classList.add("play_Btn_player")
    play_Btn.classList.add("play")
    player_controls_div.classList.add("player_controls_div")
    addFav_tracks_btn.classList.add("addFav_tracks_btn")
    ispolniyel.classList.add("ispolniyel_name_player")
    name.classList.add("track_name_player")
    songName_img_div.classList.add("songName_img_div")

    play_Btn.onclick = () => {
        if(play_Btn.classList.contains("play")) {
            play_Btn_img.src = "/img/pausebtn.png"
            play_Btn.classList.remove("play")
        } else {
            play_Btn_img.src = "/img/playbtn.png"
            play_Btn.classList.add("play")
        }
    }
    
    
    if (item.album) {
        songImg.src = item.album.images[2].url;
    } else if(item.images.length <= 1) {
        songImg.src = item.images[0].url
    } else {
        songImg.src = item.images[1].url
    }

    if(item.artists) {
        ispolniyel.innerHTML = item.artists[0].name
    } else if (item.owner) {
        ispolniyel.innerHTML = item.owner.display_name
    } else if (item.publisher) {
        ispolniyel.innerHTML = item.publisher
    }


    if (name.innerHTML.length > 40) {
        name.innerHTML = name.innerHTML.substring(0, 30) + '...';
    }


    display_not_cover_btn.append(display_not_cover_btn_div)
    display_cover_btn.append(display_cover_btn_svg_div)
    volume_div_btn.append(volume_div_btn_img_div)
    volume_div.append(volume_div_btn, volume_range)
    device_connect_btn.append(device_connect_btn_svg_div)
    queue_btn.append(queue_btn_svg_div)
    microfone_btn.append(microfone_btn_svg_div)
    now_playing_btn.append(now_playing_btn_svg_div)


    player_settings_div.append(now_playing_btn, microfone_btn, queue_btn, device_connect_btn, volume_div, display_cover_btn, display_not_cover_btn)
    
    replay_btn.append(replay_btn_svg_div)
    next_btn.append(next_btn_svg_div)
    play_Btn.append(play_Btn_img)
    prev_btn.append(prev_btn_svg_div)
    mix_btn.append(mix_btn_svg_div)
    player_controls_div.append(mix_btn, prev_btn, play_Btn, next_btn, replay_btn)
    main_player_div.append(player_controls_div, player_range)

    addFav_tracks_btn.append(btn_svg_div)
    name_ispolnitel_div.append(name, ispolniyel)
    songName_img_div.append(songImg, name_ispolnitel_div, addFav_tracks_btn)
    player_place.append(songName_img_div, main_player_div, player_settings_div)


    return player_place
}