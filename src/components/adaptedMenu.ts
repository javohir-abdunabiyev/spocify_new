export function adaptedMenu(place: any) {
    const div = document.createElement("div")

    const home_div = document.createElement("div")
    const home_svgDiv = document.createElement("div")
    const home_txt = document.createElement("p")
    home_svgDiv.innerHTML = `<svg width="24" height="24" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 27C25 27.5523 24.5523 28 24 28H16.2778C15.7255 28 15.2778 27.5523 15.2778 27V19.0526C15.2778 18.5003 14.8301 18.0526 14.2778 18.0526H10.7222C10.1699 18.0526 9.7222 18.5003 9.7222 19.0526V27C9.7222 27.5523 9.27448 28 8.7222 28H1C0.447716 28 0 27.5523 0 27V7.89769C0 7.54272 0.188173 7.21436 0.494433 7.0349L11.9962 0.295236C12.3075 0.112825 12.6929 0.112251 13.0047 0.293734L24.503 6.98543C24.8107 7.16451 25 7.49369 25 7.84972V27Z" fill="white"></path>
    </svg>`
    home_txt.innerHTML = "Главная"


    const search_div = document.createElement("div")
    const search_svgDiv = document.createElement("div")
    const search_txt = document.createElement("p")
    search_svgDiv.innerHTML = `<svg width="24" height="24" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7747 20.3561L27.5924 26.4934C28.1511 27.0828 28.1332 28.0268 27.5524 28.5933C26.9808 29.1511 26.078 29.1329 25.5282 28.5526L19.7061 22.4083C17.7272 23.93 15.4956 24.7673 13.0114 24.9203C11.3514 25.0226 9.74381 24.792 8.18858 24.2288C6.63335 23.6655 5.2766 22.8625 4.11833 21.8199C2.96006 20.7772 2.01249 19.5057 1.27561 18.0055C0.538736 16.5053 0.120961 14.9125 0.0222852 13.2271C-0.0763905 11.5418 0.152625 9.90916 0.709331 8.32924C1.26604 6.74932 2.05852 5.37069 3.08678 4.19334C4.11504 3.01599 5.36839 2.05225 6.84685 1.30212C8.3253 0.551984 9.89446 0.125799 11.5543 0.02356C13.2142 -0.0786793 14.8218 0.151834 16.3771 0.715101C17.9324 1.27837 19.2892 2.08134 20.4474 3.12402C21.6055 4.16669 22.5531 5.43815 23.2901 6.93838C24.027 8.43862 24.4448 10.0314 24.5434 11.7168C24.606 12.7861 24.5356 13.8403 24.3321 14.8793C24.1287 15.9184 23.8096 16.8946 23.3747 17.8079C22.9399 18.7212 22.4066 19.5706 21.7747 20.3561ZM12.84 21.9912C14.1107 21.9129 15.3094 21.5854 16.436 21.0085C17.5626 20.4317 18.519 19.6933 19.305 18.7934C20.091 17.8934 20.6986 16.8412 21.1279 15.6365C21.5572 14.4319 21.7341 13.1845 21.6586 11.8944C21.5831 10.6042 21.262 9.38751 20.6953 8.24424C20.1286 7.10096 19.4026 6.13081 18.5173 5.33378C17.632 4.53674 16.5964 3.92105 15.4106 3.48669C14.2247 3.05232 12.9965 2.87428 11.7258 2.95255C10.4551 3.03081 9.25646 3.35835 8.12981 3.93514C7.00317 4.51194 6.04682 5.25035 5.26078 6.15038C4.47473 7.0504 3.86709 8.10268 3.43783 9.30721C3.00858 10.5117 2.83171 11.7591 2.90721 13.0494C2.98272 14.3396 3.3038 15.5563 3.87045 16.6995C4.4371 17.8427 5.16312 18.8128 6.04853 19.6099C6.93394 20.407 7.96951 21.0227 9.15524 21.457C10.341 21.8913 11.5692 22.0694 12.84 21.9912Z" fill="grey"></path>
    </svg>`
    search_txt.innerHTML = "Поиск"


    const media_div = document.createElement("div")
    const media_img = document.createElement("img")
    const media_txt = document.createElement("p")
    media_img.src = "/img/methodysvg.svg"
    media_txt.innerHTML = "Моя медиатека"


    const installApp_div = document.createElement("div")
    const installApp_svg_div = document.createElement("div")
    const intstall_txt = document.createElement("p")
    installApp_svg_div.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="M12.438 1.009C6.368.769 1.251 5.494 1.008 11.565c-.24 6.07 4.485 11.186 10.556 11.426 6.07.242 11.185-4.484 11.427-10.554.242-6.07-4.484-11.186-10.553-11.428Zm4.644 16.114a.657.657 0 0 1-.897.246 13.22 13.22 0 0 0-4.71-1.602 13.197 13.197 0 0 0-4.968.242.658.658 0 0 1-.31-1.278 14.497 14.497 0 0 1 5.46-.265c1.837.257 3.579.851 5.177 1.76.315.178.425.58.246.896l.002.002Zm1.445-2.887a.853.853 0 0 1-1.158.344 16.214 16.214 0 0 0-5.475-1.797 16.188 16.188 0 0 0-5.758.219.855.855 0 0 1-1.018-.65.852.852 0 0 1 .65-1.018 17.92 17.92 0 0 1 6.362-.241 17.87 17.87 0 0 1 6.049 1.985c.415.224.57.743.344 1.158h.004Zm1.602-3.255a1.052 1.052 0 0 1-1.418.448 19.673 19.673 0 0 0-6.341-2.025 19.642 19.642 0 0 0-6.655.199 1.05 1.05 0 1 1-.417-2.06 21.725 21.725 0 0 1 7.364-.22 21.72 21.72 0 0 1 7.019 2.24c.515.268.715.903.448 1.418Z"></path></svg>`
    intstall_txt.innerHTML = "Скачать приложение"

    home_div.onclick = () => {
        location.assign("/")
    }
    search_div.onclick = () => {
        location.assign("/src/pages/search/")
    }

    installApp_div.classList.add("navs_divs")
    media_div.classList.add("navs_divs")
    search_div.classList.add("navs_divs")
    home_div.classList.add("navs_divs")
    div.classList.add("menu_nav_div")

    installApp_div.append(installApp_svg_div, intstall_txt)
    media_div.append(media_img, media_txt)
    search_div.append(search_svgDiv, search_txt)
    home_div.append(home_svgDiv, home_txt)

    div.append(home_div, search_div, media_div, installApp_div)
    place.append(div)

}