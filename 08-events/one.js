//event approcah -1
// document.getElementById("leafs").onclick = () => {
//     alert("leafs clicked");
// };

//event approach - 2 | early days approach
//attachEvent()
//jQuery - on

//event approach - 3 | recommended approach
//Notes
//need to watch for
//type, timestamp, defaultPrevented,
//target, toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
//altkey, ctrlkey. shiftkey, keyCode
//event propogation: public, capturing - false is defaule so no need to write but true is capturing mode
//Capturing mode flows top to bottom
document.getElementById("images").addEventListener(
    "click",
    (e) => {
        // console.log("Clicked inside the Ul itself");
    },
    false
);

document.getElementById("nature").addEventListener(
    "click",
    (e) => {
        // console.log("Nature clicked");
        // e.stopPropagation();
    },
    false
);

//This is for the google link to prevent opne the site
document.getElementById("google").addEventListener(
    "click",
    (e) => {
        // console.log("google clicked");
        e.preventDefault();
        e.stopPropagation();
    },
    false
);

//Practice to hide the image when clicked
//it will remove only if the tagname is 'IMG'
document.querySelector("#images").addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
        // removeIt.parentNode.removeChild(removeIt);
    }
});
