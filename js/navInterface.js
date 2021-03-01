function navLoad(){
    let navPanel = document.getElementsByClassName("navInterface");
    navPanel[0].innerHTML = `
    <div class="navPanel">
        <div class="navHeader">Cody The Doer</div>
        <div class="navBar">
            <a class="navLink" href="Index.html">Home</a>
            <a class="navLink" href="Services.html">Services</a>
            <a class="navLink" href="Contact.html">Contact Me</a>
            <a class="navLink" href="Demos.html">Demos</a>
        </div>
    </div>
    </br>
    `
}

window.onload = () => {
    navLoad();
}