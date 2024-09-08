export function addminiplayer(place: any) {
    place.innerHTML = ""

    const playbtn_div = document.createElement("div")
    const playbtn = document.createElement("div")
    const playbtn_img = document.createElement("img")
    const addtomediatekBtn = document.createElement("div")
    const menu_dots = document.createElement("div")


    const list_div = document.createElement("div")

    const txt = document.createElement("p")



    txt.innerHTML = "Список"
    menu_dots.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>`
    addtomediatekBtn.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path></svg>`
    playbtn_img.src = "/img/plbtn.svg"
    

    list_div.classList.add("list_div")
    playbtn_div.classList.add("miniplayer_playbtn_div")
    menu_dots.classList.add("menu_dots")
    playbtn_img.classList.add("miniplayerplaybtn_img")
    addtomediatekBtn.classList.add("addtomediatekBtn")
    playbtn.classList.add("miniplayer_playBtn")
    
    list_div.append(txt)
    playbtn.append(playbtn_img)
    playbtn_div.append(playbtn, addtomediatekBtn, menu_dots)

    place.append(playbtn_div, list_div)
}