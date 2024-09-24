export function tracksLoad(item: any) {

    const place = document.createElement("div")
    const li = document.createElement("li")
    const left_side_div = document.createElement("div")
    const img_name_div = document.createElement("div")
    const img = document.createElement("img")
    const name_publisher_div = document.createElement("div")
    const trackName = document.createElement("p")
    const publisherName = document.createElement("p")
    const album_name = document.createElement("p")
    const right_side_div = document.createElement("div")
    let added_at: any = document.createElement("p")

    const track_duration: any = document.createElement("p")
    const track_time = document.createElement("p")



    if(item.track) {
        album_name.innerHTML = item.track.album.name
        img.src = item.track.album.images[0].url
        trackName.innerHTML = item.track.name
        track_duration.innerHTML = item.track.duration_ms
        publisherName.innerHTML = item.track.artists[0].name
    } else if (item.type === "episode") {
        album_name.innerHTML = item.name
        img.src = item.images[0].url
        track_duration.innerHTML = item.duration_ms
        publisherName.innerHTML = ""
        img_name_div.style.width = "80px"
        album_name.style.width = "270px"
    } else if (item.type === "album") {
        img.src = item.images[0].url
        album_name.innerHTML = item.name
        track_duration.innerHTML = item.duration_ms
        trackName.innerHTML = item.name
    } else if (item.album.type === "album") {
        img.src = item.album.images[0].url
        album_name.innerHTML = item.name
        track_duration.innerHTML = item.duration_ms
        trackName.innerHTML = item.name
    } else {
        img.src = item.images[0].url
        album_name.innerHTML = item.name
        trackName.innerHTML = item.name
        track_duration.style.display = "none"
    }

    if (album_name.innerHTML.length > 50) {
        album_name.innerHTML = album_name.innerHTML.substring(0, 40) + '...';
    }
    

    if(item.added_at) {
        added_at.innerHTML = item.added_at
    } else if(item.release_date) {
        added_at.innerHTML = item.release_date
    } else {
        added_at.innerHTML = item.album.release_date
    }



    if(item.artists) {
        if(item.track) {
            publisherName.innerHTML = item.track.artists[0].name
        } else {
            publisherName.innerHTML = item.artists[0].name
        }
    } else if (item.owner) {
        publisherName.innerHTML = item.track.owner.display_name
    } else if (item.publisher) {
        publisherName.innerHTML = item.track.publisher
    }

    let mins = Math.trunc(track_duration.innerHTML / 60000)
    let seconds = ((track_duration.innerHTML % 60000) / 1000).toFixed(0)


    track_time.innerHTML = `${mins+":"+seconds}`


    const date = new Date(added_at.innerHTML);

    // Извлекаем день, месяц и год
    const day = date.getUTCDate();
    const month = date.toLocaleString('ru-RU', { month: 'long' });
    const year = date.getUTCFullYear();

    // Собираем в нужном формате
    const formattedDate = `${day} ${month} ${year} г.`;

    added_at.innerHTML = formattedDate



    place.classList.add("tracks_place_page")
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
    
    right_side_div.append(added_at, track_time)
    name_publisher_div.append(trackName, publisherName)
    img_name_div.append(img, name_publisher_div)
    left_side_div.append(img_name_div, album_name)
    li.append(left_side_div, right_side_div)
    place.append(li)

    return place
}