const loginBtn = document.querySelector('a') as HTMLAnchorElement

const CLIENT_ID = "617c6261c1e64cb598313397af4c08b1";
const REDIRECT_URI = "http://localhost:5173/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE = "playlist-modify-public";

// Получаем токен из URL после перенаправления
const hash = window.location.hash;
export let token = localStorage.getItem("access_token");

if (!token && hash) {
  const hashParams = hash.slice(1).split('&');
  for (let param of hashParams) {
    let [key, value] = param.split('=');
    if (key === 'access_token') {
      token = value;
      break;
    }
  }
  
  if (token) {
    localStorage.setItem("access_token", token);
    // Перенаправляем на главную страницу после сохранения токена
    window.location.href = "index.html";
  }
}

// Проверяем, есть ли токен
if (token) {
  // Перенаправляем на главную страницу, если токен уже есть
  location.assign("/")
} else {
  // Обновляем ссылку на кнопку "Log in", если токена нет
  loginBtn.href =
    `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
}
