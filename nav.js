if (window.location.pathname == "/index.html") {
    window.location.href = "/";
}

navText = `
    <ul>
        <li>
            <a href="/">
                <span class="material-symbols-rounded">schedule</span>
            </a>
        </li>
        <li>
            <a href="/index2.html">
                <span class="material-symbols-rounded">science</span>
            </a>
        </li>
        <li>
            <a href="/form.html">
                <span class="material-symbols-rounded">edit_note</span>
            </a>
        </li>
    </ul>
`;
const nav = document.querySelector("body > nav#auto");
nav.innerHTML += navText;

// set ative li
for (let index = 0; index < nav.querySelector('ul').children.length; index++) {
    let li = nav.querySelector('ul').children[index];

    if (li.querySelector('a').href == window.location.href) {

        // adds the active class
        li.classList.add('active');
    }
}