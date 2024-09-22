export function categLoad(item: any) {
    const place = document.createElement("div")

    const img = document.createElement("img")
    const categs_name = document.createElement("p")
    categs_name.innerHTML = item.name

    img.src = item.icons[0].url


    categs_name.classList.add("categs_name")
    place.classList.add("categs_img_place")
    img.classList.add("categs_img")

    place.append(img, categs_name)

    return place
}