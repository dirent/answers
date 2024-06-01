window.addEventListener( "load",
    e => console.log("load",e) );

console.log( "Hello Web Standards" )

let h1 = document.querySelector("#webstandards");
let first = e => console.log( "first", e );

h1.addEventListener("click", first );
h1.addEventListener("click",
    e => console.log( "second", e ) );
h1.onclick = e => {
    console.log( "third", e );
    h1.removeEventListener( "click", first );
};

let customEvent = new CustomEvent( "myevent",
    {
        details: {
            name: "My Event"
        }
    });

h1.addEventListener( "myevent",
        e => console.log(e) );
h1.dispatchEvent(customEvent);

let color = document.querySelector("input[type=color]");
color.onchange = e => h1.style.backgroundColor = e.target.value;

let text = document.querySelector("#userhint");
text.oninput = e => h1.textContent = e.target.value;

let detail = document.getElementById('detail');
detail.classList.add('mono');

let html = document.querySelector("html");
console.log("html font size", window.getComputedStyle(html).fontSize)
console.log("div font size", window.getComputedStyle(detail).fontSize);

let last = document.getElementById("last");
console.log("Position of last", window.getComputedStyle(last).position);