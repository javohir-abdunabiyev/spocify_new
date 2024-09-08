export function tracksLoad(item: any) {

    const li = document.createElement("li")

    // const count = document.createElement("div")


    const left_side_div = document.createElement("div")

    const img_name_div = document.createElement("div")
    const img = document.createElement("img")
    const name_publisher_div = document.createElement("div")
    const trackName = document.createElement("p")
    const publisherName = document.createElement("p")

    const album_name = document.createElement("p")

    const right_side_div = document.createElement("div")
    const added_at = document.createElement("p")

    const track_duration: any = document.createElement("p")
    const track_time = document.createElement("p")


    img.src = item.track.album.images[0].url
    trackName.innerHTML = item.track.name

    if(item.track.album) {
        album_name.innerHTML = item.track.album.name
    }


    track_duration.innerHTML = item.track.duration_ms
    added_at.innerHTML = item.added_at

    publisherName.innerHTML = item.track.artists[0].name

    if(item.artists) {
        publisherName.innerHTML = item.track.artists[0].name
    } else if (item.owner) {
        publisherName.innerHTML = item.track.owner.display_name
    } else if (item.publisher) {
        publisherName.innerHTML = item.track.publisher
    }

    let mins = Math.trunc(track_duration.innerHTML / 60000)
    let seconds = ((track_duration.innerHTML % 60000) / 1000).toFixed(0)


    track_time.innerHTML = `${mins+":"+seconds}`



    track_time.classList.add("track_time")
    added_at.classList.add("added_at")
    right_side_div.classList.add("right_side_div_cls")
    img.classList.add("tracks_img_cls")
    album_name.classList.add("albumName_cls")
    publisherName.classList.add("publisher_name_class")
    trackName.classList.add("trackName_track")
    img_name_div.classList.add("img_name_div_track")
    left_side_div.classList.add("left_side_tracks_div")
    li.classList.add("tracks_li")

    console.log("Мин", mins, "Сек", seconds);
    

    right_side_div.append(added_at, track_time)
    name_publisher_div.append(trackName, publisherName)
    img_name_div.append(img, name_publisher_div)
    left_side_div.append(img_name_div, album_name)
    li.append(left_side_div, right_side_div)

    return li
}