filterProjects("project");

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
}
