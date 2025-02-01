
const things = [
    "how beautiful you are! (I never get tired of looking at you)",
    "your tenderness to all living things, dogs especially",
    "your rage at fascists",
    "our Berlin trip!",
    "your smile",
    "how much you like light shows",
    "the trip to Hocking Hills, drinking white wine and eating California olives in the hot tub",
    "how determined you were to nurse DebBEE back to life",
    "your loyalty to Diet Coke",
    "your pretty blue eyes",
    "your forearms",
    "the way you light up around your friends",
    "your skill at cooking steak",
    "your Midwestern driving stamina (although I know you hate driving)",
    "the way you call all animals “little dudes”",
    "your excitement about semiring geometry",
    "your warmth (physically and metaphorically; you do emit a lot of heat)",
    "your integrity when it comes to work you care about",
    "your sense of coziness",
    "how big your capital letters are when you write by hand",
    "your physical presence",
    "your warm voice",
    "staying in that fancy hotel with you on our trip to Norway",
    "resting with you",
    "that time I asked you what you were doing while you were on the couch staring at the ceiling and you said “I'm working”",
    "your delight in the horrifying animatronic snowman at the Cleveland Zoo",
    "your delight in large flocks of quail and other fowl",
    "your kindness",
    "the way you start texts with “hey hey hey” when you're in a good mood",
    "you are such a sucker for speakeasies",
    "your love for the Midwest",
    "your photography",
    "getting crunk at a Michelin-starred restaurant with you and talking about love and getting married",
    "your morning texts!",
    "the way you looked at me the first time you drove me home—that is, to Amanda's—after our first date",
    "giving you a little violet orchid in Norway",
    "your willingness to explore cities with me, all across the world",
    "the way your anxiety sometimes disappears when you make a joke",
    "the little micro-expressions you make when you're being modest or measured about something",
    "your willingness to learn Hebrew for me",
    "in Norway, when we climbed a mountain together, and I kept wanting to give up and let you go ahead, but you refused and stayed with me. I think about that a lot.",
]

const pics = [
    "https://lh3.googleusercontent.com/pw/AP1GczN3pUx90QwIl0Fw3kk3tBydEI8GnEVxVvh7yeC6D7c42v8gAwEh9eU6hGNyxauwPGqCP-UNrltGz1Z2Pk9brpz_89MGhdkZX39iq9tChqbEAByqp1LQf5_BAivp8yKt07MTDlrUdwVHX_Kskr8Xhuda=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczN67Rismbu3q8LI29JBZBaV_47DTyN5UdWErHJ6_zvvuW7pxCuRdaNksRZD_vK9ZH7nHzqKWfh_Qx8dJXuWNFT10yH-GxwjCCn4hTDcnvJvbR_D0PVYRJwteiWzj067cYM0H7XARKWJRw0ZiSB6i1SK=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPw06yR3ngSocZ5zFWRFuX56AsjAQ0QhkwT26U8Rhee7-c9GWzsNHcv-Q6msRL5EXNmNzgna3vdnvDgGZ6rCc9CqfFnW3aj-Co49MVDtyQ8ZcOTJIP3E02FW9Ui4dvMVnxO92Uyqj8joHu2Q1se45AS=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPlLQm_mjlbVVq7Zr5v-dZk4XO-7O6-OeMDgYYzpJr14gSekzq159W8Tw4OaXIrcOGi6r2r2FbF42nUHKM-utBDBk7HULbji6qp27einxQl83GkFtTYwdMT8TSEbuKixubeZJXwCJyMSrVT_doyLkI8=w606-h808-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczMD5KWmzX3Q4FKQ0Lc72Aq_6B4LA9Sv5rP8Q5_E8l5NpJnCw5GLkW0XsdY-8bm003wR_AlEefN97faDTQLVMYOkxGlDPWIGHYS9TG7C3Hbw2DYBtLMfDPi8vwQ8m_pcvGiA4aj4AMaNf8IEaOXXlf8j=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczMl-chJqnYlhNtX7wNh0N2vfpDa_zpAY1DRdjpboanIU-emcBDfYuTvXl0PJPl3EQhGZ_dulY_zcfkWOvBc1pU8yaeho_0f1FaxCYuADPdtz8tO1ASFfc3N8gUJLvHlx1ans0Ii9UHqXzj34y1jZERI=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOtaNy78rOpYoUbkPuUYR8NX_BRYdAZ_q7ygIzIl1xHxpMhxs-LcW6C1dOYy9k1AT6BNBvUPDIxJRRe9eKnmO2LnlUMc-rdgrygsa7mrCcc54tOLoY2AgaoqyCXMgNuP_rhR_tcIhgEQ1L0XnoojPqt=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPicdqrq8DD0xdHmziOL_OtcPcgcpfQqjRSv0mZof_bEAAtAQ1Z_IhsrovWHbGwbAqK0K843mw8I8cDG9S0p3qWW-LO2Pv4Dk83dyOXdP7Sis-6CXu1RPDjygWlrDlOiRdypdPBkq1i7M48DavlO48o=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczNgCyPRamRUQUV6zsy1W8UZ6gqlpnIxm9z2p2-wSnVKH0031bvD83PQs7zv8h5CJGLnFf5IiHp3iYM0iyRg6DGzwTT4U6nkfW7yuqU-BJFjAmOh98EYnbRFF1gOqIjvpv1lGgEfbCZrlZL4gxgBuKch=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczP0sL-MVU0jwZxPu-6ok_iUclTrl02_DopmOQgv_SK8kThuj2BKqX9d9rRRjNimODwZu8_QfSCxizc2i29PGqUpMxQ5WbHmL8GSnk3YIZD4l9lyIJBazfqkEFUqMVpK1S97EOaqNDrTCp7xPOvO7K7L=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPzK_w1ijmuNnfXoqXQ5V8bFawTPe6fzWHYA7z1uHjaPlP71UYckgVSklCYt3h20o_cJjdi1FJE9jWtlovAbb6Fam7-EkYDnBee5L4cXlv5XGwPIBkkrMvuKk-r8ES3kBjlemhmxHDby-lcLxJA0vGe=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPbgDfUN__nhrTGH5uJFOSHveSqBaZSzrDn9T3foIGjayvmZQT3hSrpgM663F5p_ihEM61wJ0EAueGkqTSkSA1kPVRoEZgrArcz4Ot72tlIggYaW8Ck6OIy0OCC7ziuQ2m569TnObGpqnM2wNB1Rhi-=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczM4lojxrfNASAmzDAjtH1OASMVBY9pKFFRUTDzZxaN781bOti6NXZADCtAuzgonNYbx4tCmhXpKTAoPig43u1rxxwq_BStKyx2AIaLyP5Nkmh5eYKaGVSJmAvtzGYVIW0fJIOc3fO5MDS1cO3iJv6Po=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczNYZHmSCFoy7WAjt9eHTznJqOAPvJ10Z_7KPlPme5_O8QGWMFixbcmxNwvkBp8g8M5XO_2BR2rI_KYoIPtakQLWoWCmhJkIiAzQtrtKb-KKzeFnxGvkA0fJ2cEBAvApR5pONsh_595pinBZlqh2zmy8=w1200-h1600-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczO0LRZlooaCQNc9z7Grmb7EA_oonte29N7Iid06m4V045vT5qqpiiilgGNFa-X11oMz0gVWSq1f8iJ0dWYBLh-Unk1QrvdR9xPLHcn_Nnp6paW24PlGj4Iv3_JnmZ3z7vJ3b8CjTxslw0_9mVXTkYrM=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOYwFpcGfnJuWp870mqUZfbdxPwjHevtgLTmK-aoBrRuzOps3OvxIO0OayT8Jwk8dk5Z_-azfTihwFDa2z_jef_3D7LORx_N_vzkCMi4e9YpHU_QXyrqas9VE01RcK8ZJdG81B_kedC6uS8YOK2JXXP=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczNn-FucoxjQJzWf3TNXAdwDGaLPWiH9a5eFU80sM57JthFNhTR7V46mv2QiA_lrr6QWV5dJy540TU08LzhQW2XiaYPi-qfFTun5IOEEIeN-1sKkSBv8gnT0GTwhfZfq_pj4OuvmG7r8Y-pNJIAHn7Nc=w1200-h1600-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczMyRZRGIGGTi0hT-Rr4NpBtHal2znJpXd22Y4XvvjuH31GfSC_oWeOgbz8TjHwxKK5AfqPDtojAVaJWMw9F32sA0qrQDKM5ErJpYefEiJgREsDN6QbWiqEkrIue7PwLSsT1g6rkAEHmnBpk9Q05EwLd=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczNO-1zqC3ADw5oGX2MMZb4eW4akruyusOlWE4a_HbgcAgGZOIzF55bDxr9vztj9ukWKAKgLwsbbj5d3m9i7qbws_BGGeP6lh4AlRBg9OxeJS6-vD5Oxq4N8nAAIskywO0KTSL4EKZZTn2LbBrO8PuPC=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczNRfdnRBzSfxCdtvU3m2ruP3XG7ukQJLDpjTl-Vji7GkQLPjNUI4mlYiytFKIwGq7kLisjoNp8s5EXUbo8LUc7JOqtmbopKyDPiihR5wzQUiO6Ojt9zs_uJyiNQGiWKZXgy5HAcf6Da3FxnWPPKwOar=w1070-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczORv4KK3WUqZlTZOJ8bZI6416J6MOuy-5Qh8hG4De3pw2kj8Hl6fz_NiwNIx2weAHi2OZPi1adrdhTfDaRr4Rg4y4MQCPYfzG8AL9prgN25NOFS4ymmOPCg8p3c6m-2sI-V_6vOxvCGrZAzp0d7_cdc=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczMDxh411jU8Pe4ZTYeioSZqdCW029TI3v-Och06Xr30b6yT8Lb_bccaSvsssu1J1OfP87PHi_eISXRNQnvf5tmQE-jPvwYHSLaB7pdgciCCbMkKf4zSPNmH6sozdS7n3bUBv4ExppLgQKDv6evsRIF-=w1204-h1604-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOdkXDvzanNZilirKNiDUD2WRhuS4RlCH39DV0eM_gKdpQJW2KqdKwfqXbvNKZwaoNpyutJG4_P2iTbtJ6on8I2ECfQR4m_rCfdkXnizU_eR15343RfjLhjDzd3_V_nm6s05nS5OrqObZj7uearJpx8=w1204-h1604-s-no-gm?authuser=1",

]

const getRandomThings = () => {
    return things
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 27);
}

const getRandomPics = () => {
    return pics
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 3);
}

const createListItemFromThing = (thing, listElement) => {
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(thing));
    listElement.appendChild(element);
}

const getAndFormatThings = () => {
    const things = getRandomThings();
    const list = document.getElementById("list-of-things");
    list.innerHTML = "";
    things.map(thing => createListItemFromThing(thing, list));
}

const createImgFromUrl = (imgUrl, container) => {
    const img = document.createElement('img');
    img.src = imgUrl;
    container.appendChild(img);
}

const getAndFormatImgs = () => {
    const pics = getRandomPics();
    const container = document.getElementById("pic-container");
    container.innerHTML = "";
    pics.map(pic => createImgFromUrl(pic, container));
}

const getItAll = () => {
    getAndFormatImgs();
    getAndFormatThings();
}
