export function addleftAside(place: any) {
    place.innerHTML = ""

    const menuAside = document.createElement("aside");
    const homeSearch = document.createElement("div");
    const homeSearchUl = document.createElement("ul");
    const homeSearchLi1 = document.createElement("li");
    const anchor1 = document.createElement("a");
    const svgImgOne = document.createElement("div");
    const span1 = document.createElement("span");
    const homeSearchLi2 = document.createElement("li");
    const anchor2 = document.createElement("a");
    const svgImgTwo = document.createElement("div");
    const span2 = document.createElement("span");
    const myMethody = document.createElement("div");
    const methodyHeader = document.createElement("header");
    const methodyBtn = document.createElement("button");
    const imgMethody = document.createElement("img");
    const spanMethody = document.createElement("span");
    const btnsDiv = document.createElement("div");
    const addPlaylistBtn1 = document.createElement("button");
    const addPlaylistBtn2 = document.createElement("button");
    const arrowP = document.createElement("p");
    const listSections = document.createElement("div");
    const firstPlaylistSection = document.createElement("section");
    const spansDiv1 = document.createElement("div");
    const firstListSpan1 = document.createElement("span");
    const secondListSpan1 = document.createElement("span");
    const doPlayListBtnDiv1 = document.createElement("div");
    const playlistBtn1 = document.createElement("button");
    const playlistBtnSpan1 = document.createElement("span");
    const secondPlaylistSection = document.createElement("section");
    const spansDiv2 = document.createElement("div");
    const firstListSpan2 = document.createElement("span");
    const secondListSpan2 = document.createElement("span");
    const doPlayListBtnDiv2 = document.createElement("div");
    const playlistBtn2 = document.createElement("button");
    const playlistBtnSpan2 = document.createElement("span");


    anchor1.href = "/";
    anchor2.href = "/src/pages/search/";

    anchor1.onclick = () => {
        anchor2.classList.remove("active_anchor")
        anchor1.classList.add("active_anchor")
    }

    anchor2.onclick = () => {
        anchor1.classList.remove("active_anchor")
        anchor2.classList.add("active_anchor")
    }

    span1.textContent = "Главная";
    span2.textContent = "Поиск";
    imgMethody.src = "/img/methodysvg.svg";
    imgMethody.alt = "";
    spanMethody.textContent = "Моя методика";
    addPlaylistBtn1.textContent = "+";
    arrowP.textContent = "→";
    firstListSpan1.textContent = "Создай свой первый плейлист";
    secondListSpan1.textContent = "Это совсем не сложно! Мы поможем.";
    playlistBtnSpan1.textContent = "Создать плейлист";
    firstListSpan2.textContent = "Подпишись на интересные подкасты";
    secondListSpan2.textContent = "Ты будешь узнавать о новых выпусках.";
    playlistBtnSpan2.textContent = "Обзор";

    svgImgOne.innerHTML = `<svg width="24" height="24" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 27C25 27.5523 24.5523 28 24 28H16.2778C15.7255 28 15.2778 27.5523 15.2778 27V19.0526C15.2778 18.5003 14.8301 18.0526 14.2778 18.0526H10.7222C10.1699 18.0526 9.7222 18.5003 9.7222 19.0526V27C9.7222 27.5523 9.27448 28 8.7222 28H1C0.447716 28 0 27.5523 0 27V7.89769C0 7.54272 0.188173 7.21436 0.494433 7.0349L11.9962 0.295236C12.3075 0.112825 12.6929 0.112251 13.0047 0.293734L24.503 6.98543C24.8107 7.16451 25 7.49369 25 7.84972V27Z" fill="white"/>
    </svg>`
    svgImgTwo.innerHTML = `<svg width="24" height="24" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7747 20.3561L27.5924 26.4934C28.1511 27.0828 28.1332 28.0268 27.5524 28.5933C26.9808 29.1511 26.078 29.1329 25.5282 28.5526L19.7061 22.4083C17.7272 23.93 15.4956 24.7673 13.0114 24.9203C11.3514 25.0226 9.74381 24.792 8.18858 24.2288C6.63335 23.6655 5.2766 22.8625 4.11833 21.8199C2.96006 20.7772 2.01249 19.5057 1.27561 18.0055C0.538736 16.5053 0.120961 14.9125 0.0222852 13.2271C-0.0763905 11.5418 0.152625 9.90916 0.709331 8.32924C1.26604 6.74932 2.05852 5.37069 3.08678 4.19334C4.11504 3.01599 5.36839 2.05225 6.84685 1.30212C8.3253 0.551984 9.89446 0.125799 11.5543 0.02356C13.2142 -0.0786793 14.8218 0.151834 16.3771 0.715101C17.9324 1.27837 19.2892 2.08134 20.4474 3.12402C21.6055 4.16669 22.5531 5.43815 23.2901 6.93838C24.027 8.43862 24.4448 10.0314 24.5434 11.7168C24.606 12.7861 24.5356 13.8403 24.3321 14.8793C24.1287 15.9184 23.8096 16.8946 23.3747 17.8079C22.9399 18.7212 22.4066 19.5706 21.7747 20.3561ZM12.84 21.9912C14.1107 21.9129 15.3094 21.5854 16.436 21.0085C17.5626 20.4317 18.519 19.6933 19.305 18.7934C20.091 17.8934 20.6986 16.8412 21.1279 15.6365C21.5572 14.4319 21.7341 13.1845 21.6586 11.8944C21.5831 10.6042 21.262 9.38751 20.6953 8.24424C20.1286 7.10096 19.4026 6.13081 18.5173 5.33378C17.632 4.53674 16.5964 3.92105 15.4106 3.48669C14.2247 3.05232 12.9965 2.87428 11.7258 2.95255C10.4551 3.03081 9.25646 3.35835 8.12981 3.93514C7.00317 4.51194 6.04682 5.25035 5.26078 6.15038C4.47473 7.0504 3.86709 8.10268 3.43783 9.30721C3.00858 10.5117 2.83171 11.7591 2.90721 13.0494C2.98272 14.3396 3.3038 15.5563 3.87045 16.6995C4.4371 17.8427 5.16312 18.8128 6.04853 19.6099C6.93394 20.407 7.96951 21.0227 9.15524 21.457C10.341 21.8913 11.5692 22.0694 12.84 21.9912Z" fill="grey"/>
    </svg>
    `

    menuAside.classList.add("menuAside");
    homeSearch.classList.add("home_search");
    homeSearchUl.classList.add("home_search_ul");
    homeSearchLi2.classList.add("home_search_li");
    homeSearchLi1.classList.add("home_search_li");
    anchor1.classList.add("anchor", "active_anchor");
    svgImgOne.classList.add("svg_img_one");
    anchor2.classList.add("anchor");
    svgImgTwo.classList.add("svg_img_two");
    myMethody.classList.add("my_methody");
    methodyHeader.classList.add("methody_header");
    methodyBtn.classList.add("methody_btn");
    firstPlaylistSection.classList.add("first_playlist");
    btnsDiv.classList.add("btns_div");
    addPlaylistBtn1.classList.add("addPlaylist");
    addPlaylistBtn2.classList.add("addPlaylist");
    arrowP.classList.add("arrow");
    listSections.classList.add("ListSections");
    spansDiv1.classList.add("spans");
    firstListSpan1.classList.add("firstListSpan");
    secondListSpan1.classList.add("secondListSpan");
    doPlayListBtnDiv1.classList.add("doPlayListBtn");
    playlistBtn1.classList.add("pl_obzor");
    secondPlaylistSection.classList.add("first_playlist");
    spansDiv2.classList.add("spans");
    firstListSpan2.classList.add("firstListSpan");
    secondListSpan2.classList.add("secondListSpan");
    doPlayListBtnDiv2.classList.add("doPlayListBtn");
    playlistBtn2.classList.add("obzor");


    anchor1.append(svgImgOne, span1);
    homeSearchLi1.appendChild(anchor1);
    anchor2.append(svgImgTwo, span2);
    homeSearchLi2.appendChild(anchor2);
    homeSearchUl.append(homeSearchLi1, homeSearchLi2);
    homeSearch.appendChild(homeSearchUl);
    methodyBtn.append(imgMethody, spanMethody);
    addPlaylistBtn2.appendChild(arrowP);
    btnsDiv.append(addPlaylistBtn1, addPlaylistBtn2);
    methodyHeader.append(methodyBtn, btnsDiv);
    spansDiv1.append(firstListSpan1, secondListSpan1);
    playlistBtn1.appendChild(playlistBtnSpan1);
    doPlayListBtnDiv1.appendChild(playlistBtn1);
    firstPlaylistSection.append(spansDiv1, doPlayListBtnDiv1);
    spansDiv2.append(firstListSpan2, secondListSpan2);
    playlistBtn2.appendChild(playlistBtnSpan2);
    doPlayListBtnDiv2.appendChild(playlistBtn2);
    secondPlaylistSection.append(spansDiv2, doPlayListBtnDiv2);
    listSections.append(firstPlaylistSection, secondPlaylistSection);
    myMethody.append(methodyHeader, listSections);
    menuAside.append(homeSearch, myMethody);

    place.append(menuAside)
}