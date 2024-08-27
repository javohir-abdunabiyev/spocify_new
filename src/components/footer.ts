export function footerLoad(place: any) {
    place.innerHTML = ""

    // Компания
    const company_div: HTMLElement = document.createElement("div")
    const main_txt: HTMLElement = document.createElement("p")
    const about: HTMLElement = document.createElement("a")
    const vacancy: HTMLElement = document.createElement("a")
    const for_the_record: HTMLElement = document.createElement("a")

    main_txt.innerHTML = "Компания"
    about.innerHTML = "О нас"
    vacancy.innerHTML = "Вакансии"
    for_the_record.innerHTML = "For the Record"
    main_txt.classList.add("footer_mainTxts")
    company_div.classList.add("footer_columns_div")


    // Сообщества
    const soob_div: HTMLElement = document.createElement("div")
    const main_a: HTMLElement = document.createElement("p")
    const for_ispolniteley: HTMLElement = document.createElement("a")
    const for_devs: HTMLElement = document.createElement("a")
    const ads: HTMLElement = document.createElement("a")
    const for_investors: HTMLElement = document.createElement("a")
    const for_vendors: HTMLElement = document.createElement("a")


    main_a.innerHTML = "Сообщества"
    for_ispolniteley.innerHTML = "Для исполнителей"
    for_devs.innerHTML = "Для разработчиков"
    ads.innerHTML = "Реклама"
    for_investors.innerHTML = "Для инвесторов"
    for_vendors.innerHTML = "Для вендоров"
    main_a.classList.add("footer_mainTxts")
    soob_div.classList.add("footer_columns_div")


    // Полезные ссылки
    const useful_anchors_div: HTMLElement = document.createElement("div")
    const main_p: HTMLElement = document.createElement("p")
    const spravka: HTMLElement = document.createElement("a")
    const mobile_app: HTMLElement = document.createElement("a")

    main_p.innerHTML = "Полезные ссылки"
    spravka.innerHTML = "Справка"
    mobile_app.innerHTML = "Бесплатное мобильное приложение"
    main_p.classList.add("footer_mainTxts")
    useful_anchors_div.classList.add("footer_columns_div")


    // Планы Spocify
    const sp_plans_div: HTMLElement = document.createElement("div")
    const main_text: HTMLElement = document.createElement("p")
    const individual_sub: HTMLElement = document.createElement("a")
    const premium_for_twos: HTMLElement = document.createElement("a")
    const premium_for_family: HTMLElement = document.createElement("a")
    const premium_for_students: HTMLElement = document.createElement("a")
    const free_sp_version: HTMLElement = document.createElement("a")


    main_text.innerHTML = "Планы Spocify"
    individual_sub.innerHTML = "Индивидуальная подписка Spocify Premium"
    premium_for_twos.innerHTML = "Premium для двоих"
    premium_for_family.innerHTML = "Premium для семьи"
    premium_for_students.innerHTML = "Premium для студентов"
    free_sp_version.innerHTML = "Бесплатная версия Spocify"
    main_text.classList.add("footer_mainTxts")
    sp_plans_div.classList.add("footer_columns_div")


    // Их соц сети
    const socs_div: HTMLElement = document.createElement("div")
    const inst: HTMLAnchorElement = document.createElement("a")
    const inst_img: HTMLImageElement = document.createElement("img")
    const twitter: HTMLAnchorElement = document.createElement("a")
    const twitter_img: HTMLImageElement = document.createElement("img")
    const facebook: HTMLAnchorElement = document.createElement("a")
    const facebook_img: HTMLImageElement = document.createElement("img")
    


    inst.href = "https://www.instagram.com/spotify"
    inst.target = "_blank"
    inst.classList.add("socs_style_div")
    twitter.classList.add("socs_style_div")
    twitter.href = "https://x.com/spotify"
    twitter.target = "_blank"
    facebook.classList.add("socs_style_div")
    facebook.href = "https://www.facebook.com/Spotify"
    facebook.target = "_blank"
    inst_img.src = "/img/instlogo.png"
    twitter_img.src = "/img/twitterlogo.png"
    facebook_img.src = "/img/facebooklogo.png"
    socs_div.classList.add("socs_div")
    
    
    inst.append(inst_img)
    twitter.append(twitter_img)
    facebook.append(facebook_img)
    sp_plans_div.append(main_text, individual_sub, premium_for_twos, premium_for_family, premium_for_students, free_sp_version)
    useful_anchors_div.append(main_p, spravka, mobile_app)
    soob_div.append(main_a, for_ispolniteley, for_devs, ads, for_investors, for_vendors)
    company_div.append(main_txt, about, vacancy, for_the_record)
    socs_div.append(inst, twitter, facebook)

    place.append(company_div, soob_div, useful_anchors_div, sp_plans_div, socs_div)
}