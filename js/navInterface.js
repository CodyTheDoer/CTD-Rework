function navLoad(){
    let navPanel = document.getElementsByClassName("navInterface");
    navPanel[0].innerHTML = `
    <div class="navPanel">
        <div class="navHeader">Cody The Doer</div>
        <div class="navBar">
            <a class="navLink" href="index.html">Home</a>
            <a class="navLink" href="Services.html">Services</a>
            <a class="navLink" href="Contact.html">Contact Me</a>
            <a class="navLink" href="Demos.html">Demos</a>
        </div>
    </div>
    </br>
    `
}

function mailingList(){
    let mailingList = document.getElementsByClassName("mailingList");
    mailingList[0].innerHTML = `
    <div class="navHeader">Join The Mailing List</div>
    <div class="navBar">
        <form class="mailingListForm">
            <div>
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name">
            </div>
            <br>
            <div>
                <label for="name">Your Email</label>
                <input type="text" id="Email" name="Email">
            </div>
            <br>
            <div>
                <input type="submit" value="Join the Mailing List">
            </div>
        </form>
    </div>
    </br>
    `
}

window.onload = () => {
    navLoad();
}