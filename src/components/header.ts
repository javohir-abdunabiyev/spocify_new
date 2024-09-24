import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from "../pages/Login";

export function header(place: any) {
    const header = document.createElement('header');
    header.className = 'center_section_header';
    const latestPagesNav = document.createElement('div');
    latestPagesNav.className = 'latest_pages_nav';
    const backButton = document.createElement('button');
    backButton.className = 'back';
    const backImg = document.createElement('img');
    backImg.src = '/img/back.svg';
    backImg.alt = '';
    backButton.append(backImg);
    const nextButton = document.createElement('button');
    nextButton.className = 'next';
    const nextImg = document.createElement('img');
    nextImg.src = '/img/next.svg';
    nextImg.alt = '';
    nextButton.append(nextImg);
    latestPagesNav.append(backButton, nextButton);
    const appPremiumBtns = document.createElement('div');
    appPremiumBtns.className = 'app_premiumBtns';
    const premiumButton = document.createElement('button');
    premiumButton.className = 'premium';
    const premiumSpan = document.createElement('span');
    premiumSpan.textContent = 'Узнать больше о Premium';
    premiumButton.append(premiumSpan);
    const loadAppLink = document.createElement('a');
    loadAppLink.className = 'loadApp';
    loadAppLink.href = '';
    loadAppLink.draggable = false;
    const loadAppSpan = document.createElement('span');
    loadAppSpan.textContent = 'Установить приложение';
    loadAppLink.append(loadAppSpan);
    const somethingNewButton = document.createElement('button');
    somethingNewButton.className = 'something_new';
    const svgDiv = document.createElement('div');
    svgDiv.className = 'svgDiv';
    svgDiv.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
        <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
    </svg>`;
    const avatarButton = document.createElement('button');
    avatarButton.className = 'avatarBtn';
    const avatarImg = document.createElement('img');
    avatarImg.src = '/img/avatar.svg';
    avatarImg.alt = '';

    const exitAcc = document.createElement("button")
    const excit_anchor = document.createElement("a")
    excit_anchor.classList.add("excit_anchor")
    excit_anchor.innerHTML = "E"
    excit_anchor.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    exitAcc.classList.add("avatarBtn")

    exitAcc.append(excit_anchor)
    somethingNewButton.append(svgDiv)
    avatarButton.append(avatarImg);
    appPremiumBtns.append(premiumButton, loadAppLink, somethingNewButton, avatarButton, exitAcc);
    header.append(latestPagesNav, appPremiumBtns);
    place.append(header)
}