function toggleExpand(id) {
  let hiddenid = id + "-hidden";
  if(document.getElementById(id).getAttribute("aria-expanded") === "false"){
    document.getElementById(id).setAttribute("aria-expanded", "true");
    document.getElementById(hiddenid).setAttribute("aria-hidden", "false");
  } else {
    document.getElementById(id).setAttribute("aria-expanded", "false");
    let hiddenid = id + "-hidden";
    document.getElementById(hiddenid).setAttribute("aria-hidden", "true");
  }
}

function filterProjects(byClass) {
  console.log(byClass);
  let todisplay = document.getElementsByClassName(byClass);
  removeShow();
  let i;
  for (i = 0; i < todisplay.length; i++){
    let el = todisplay[i];
    el.className = el.className + " show";
  }

  document.getElementById(byClass).style.backgroundColor = "#cacccf"
}

function removeShow(){
    let all = document.getElementsByClassName("project");
    let i;
    for (i = 0; i<all.length; i++){
        let arr1 = all[i].className.split(" ");
        let lastind = arr1.length - 1;
        let last = arr1[lastind];
        if (last === "show") {
          arr1.splice(lastind, 1);
          all[i].className = arr1.join(" ");
        }
    }
    document.getElementById("tech").style.backgroundColor = "white";
    document.getElementById("writing").style.backgroundColor = "white";
    document.getElementById("project").style.backgroundColor = "white";
}

var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://collectionapi.metmuseum.org/public/collection/v1/objects",
    });
    resolve(request);
  });

const corsPromise2 = (id) =>
  new Promise((resolve, reject) => {
    const request2  = doCORSRequest({
      url: "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id,
    });
    resolve(request2);
  });


const corsPromise3 = () =>
  new Promise((resolve, reject) => {
    const request3  = doCORSRequest({
      url: "https://shakespeare-quotes-gen.herokuapp.com/api/v1/quotes/single",
    });
    resolve(request3);
  });

let objList;

const getArt = () => {
  clearChildren(document.getElementById("artdiv"));
  document.getElementById("artdiv").innerHTML = "<p>Loading...</p>"
  corsPromise().then(
    (request) =>
      (request.onload = request.onerror = function () {
        objList = (JSON.parse(request.response));
        console.log(objList);
        const randId = objList.objectIDs[Math.floor(Math.random()*474145)];
        corsPromise2(objList.objectIDs[Math.floor(Math.random()*90000)]).then(
            (request2) =>
              (request2.onload = request2.onerror = function () {
                artList = JSON.parse(request2.response);
                console.log(artList);
                clearChildren(document.getElementById("artdiv"));
                let innerStr;
                if (artList.primaryImage === null || artList.primaryImage === '') {
                  innerStr = "<span class='artDescription'>Oh no! Couldn't load image.<br/><a href='" +
                  artList.objectURL + "'>" + artList.title + "</a><br/>" + artList.artistDisplayName +
                  "</span><iframe src='" + artList.objectURL + "' title='" + artList.title +
                  "'></iframe>";
                } else {
                  innerStr = "<img class='artimg' src="
                  + artList.primaryImage + " alt=" + artList.title + "/>"
                    + "<span class='artDescription'><a href='" + artList.objectURL +
                    "'>" + artList.title + "</a><br/>" + artList.artistDisplayName +
                    "</span><iframe src='" + artList.objectURL + "' title='" + artList.title +
                    "'></iframe>" ;

                }
                console.log(innerStr);
                document.getElementById("artdiv").innerHTML = innerStr;
              })
          )
      })
    );
}

const getShax = () => {
  clearChildren(document.getElementById("shaxdiv"));
  document.getElementById("shaxdiv").innerHTML = "<p>Loading...</p>";
  // corsPromise3().then(
  //   (request3) =>
  //     (
  //       request3.onload = request3.onerror = function () {
  //       console.log((JSON.parse(request3.response)).quote.quote);
  //       document.getElementById("shaxdiv").innerHTML = "<p>" + (JSON.parse(request.response)).quote.quote + "</p>";
  //     })
  //   );
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://shakespeare-quotes-gen.herokuapp.com/api/v1/quotes/single", requestOptions)
    .then(response => response.text())
    .then(result => { console.log(result); document.getElementById("shaxdiv").innerHTML = "<p>" + (JSON.parse(result)).quote.quote + "</p>"; })
    .catch(error => console.log('error', error));
}

const clearChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

const getJoke = () => {
  clearChildren(document.getElementById("jokediv"));
  const randId = Math.floor(Math.random()*7);
  let innerStr;
  switch (randId) {
    case 0:
      innerStr = "<p>The census taker comes to the Goldman house.<br/>“Does Louis Goldman live here?” he asks.<br/>“No,” replies Goldman.<br/>“Well, then, what is your name?”<br/>“Louis Goldman.”<br/>“Wait a minute–didn’t you just tell me that Goldman doesn’t live here?”<br/>“Aha,” says Goldman. “You call this living?”</p>";
      break;
    case 1:
      innerStr = "<p><i>Knock knock.</i><br/>Who's there?<br/><i>Cargo!</i><br/>Cargo who?<br/><i>Cargo beep beep!</i></p>";
      break;
    case 2:
      innerStr = "<p>A chicken and an egg are in bed. The chicken turns to the egg and says, “Well, I guess we finally know the answer to that question.”</p>";
      break;
    case 3:
      innerStr = "<p>An older man in Miami Beach falls and breaks his leg. A paramedic comes and puts him on a stretcher.<br/> “Are you comfortable?” the paramedic asks.<br/> He responds: “I make a living.”</p>";
      break;
    case 4:
      innerStr = "<p><i>Q: What did Charles Dickens keep on his spice rack?</i><br/>A: The best of thymes...the worst of thymes...</p>";
      break;
    case 5:
      innerStr = "<p>A Roman walks into a bar, holds up two fingers, and says, “Five beers, please.”</p>";
      break;
    default:
      innerStr="<p>A man is arrested and taken to an interrogation room.<br/>He says to the police officer, “I'm not saying anything without my lawyer present.”<br/>“You are the lawyer,” replies the officer.<br/>“Exactly, so where's my present?!”</p>";
  }
  document.getElementById("jokediv").innerHTML = innerStr;
}

const getInsult = () => {
  clearChildren(document.getElementById("insultdiv"));
  const randId = Math.floor(Math.random()*8);
  let innerStr;
  switch (randId) {
    case 0:
      innerStr = "<p>I hope you drink too much castor oil.</p>";
      break;
    case 1:
      innerStr = "<p>Your stomach will rumble so badly, you'll think it was Purim noisemaker.</p>";
      break;
    case 2:
      innerStr = "<p>Putz!</p>";
      break;
    case 3:
      innerStr = "<p>I hope you swallow an umbrella and it opens up on the way out.</p>";
      break;
    case 4:
      innerStr = "<p><a href='https://www.sporcle.com/blog/2018/03/35-yiddish-insults-for-everyday-use/'>May you lie in the ground and burn bagels!</a></p>";
      break;
    default:
      innerStr="<p>May you never run out of toilet paper, but may it only be one-ply.</p>";
  }
  document.getElementById("insultdiv").innerHTML = innerStr;
}

const getThing = () => {
  clearChildren(document.getElementById("bessdiv"));
  const randId = Math.floor(Math.random()*13);
  let innerStr;
  switch (randId) {
    case 0:
      innerStr = "<p>Has literally walked 50 miles every weekend in the summer heat. Could you do that? (Not you bud.) Didn't think so.</p>";
      break;
    case 1:
      innerStr = "<p>Makes a mean pourover.</p>";
      break;
    case 2:
      innerStr = "<p>Will trek for miles to find that one sandwich, specific grocery item, ice cream cone, or other noteworthy food item, no matter what.</p>";
      break;
    case 3:
      innerStr = "<p>Serves up smexy Blue Steel looks. See: </p><img src='./amanda-borth.jpeg'/>";
      break;
    case 4:
      innerStr = "<p>Sometimes gets so excited she is blurry!</p> <img src='./amanda-shira-blurry.JPG'/>";
      break;
    case 5:
      innerStr = "<p>Negotiates rent like an actual pro. How do she do it??</p>";
      break;
    case 6:
      innerStr = "<p>Is <strike>stubborn</strike> principled, and speaks up for what she believes in!!</p>";
      break;
    case 7:
      innerStr = "<p>LOOK AT THIS RESEARCH. THE POWER. SO PROFESH. WOW</p> <img src='./amanda-profesh.JPG'/>";
      break;
    case 8:
      innerStr = "<p>Will match your overalls...unironically.</p> <img src='./amanda-shira-match.JPG'/>";
      break;
    case 9:
      innerStr = "<p>Is always down for a toast, no matter the occasion</p> <img src='./a-toast.JPG'/>";
      break;
    case 10:
      innerStr = "<p>Makes some mean seitan.</p>";
      break;
    default:
      innerStr = "<p>Is the best bud anyone could ever ask for <3 Happy 23rd, bud!! love you so much!!!</p> <img src='./amanda-shira-overalls-hug.JPG'/>";

  }
  document.getElementById("bessdiv").innerHTML = innerStr;
}
