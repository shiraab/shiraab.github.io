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

const clearChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
