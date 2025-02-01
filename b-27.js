
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
    "your willingness to learn Hebrew for me (and all the other little things you do to show your love!)",
    "in Norway, when we climbed a mountain together, and I kept wanting to give up and let you go ahead, but you refused and stayed with me. I think about that a lot.",
]

const getRandomThings = () => {
    return things
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 27);
}

const createListItemFromThing = (thing, listElement) => {
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(thing));
    listElement.appendChild(element);
}

const getAndFormatThings = (e) => {
    const things = getRandomThings();
    const list = document.getElementById("list-of-things");
    list.innerHTML = "";
    things.map(thing => createListItemFromThing(thing, list));
}
