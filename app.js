var bleep = new Audio();
bleep.src = "bleep.mp4"


var aboutBtn = document.getElementById('aboutBtn').addEventListener('click', about);
var educationBtn = document.getElementById('educationBtn').addEventListener('click', education);
var skillsBtn = document.getElementById('skillsBtn').addEventListener('click', skills);
var workBtn = document.getElementById('workBtn').addEventListener('click', work);
var interastsBtn = document.getElementById('interastsBtn').addEventListener('click', interasts);

var contentBox = document.getElementById('profile-card');


function about() {
    var aboutText = `
  <img src="" alt="" width="300px" height="300px">
  <h1>Djordjevic Nikola</h1>
    <h2>Front End Developer</h2>
    <p>My name is Nikola Đorđević. 
    Since 2018, I have been learning about web-development. I have completed a few online courses as well as the CODE by ComTrade course for Front-End Development in 2019.

    I don’t have any professional experience in the field yet, but I have worked on freelance projects (UpWork.com) while in school and self-studying. 

    </p> `;
    contentBox.innerHTML = aboutText;
    // console.log(aboutText)
    // contentBox.appendChild(aboutText);
}
function skills() {
    var skillsText = `<div class="skills">
    <div class="main-skills">
        <h2 class='skill-title'>SKILLS</h2> 
        <h3>HTML</h3>
        <h3>CSS</h3>
        <p>SASS</p>
        <h3>JavaScript</h3>
        <p>React</p>
       
</div>
<div class="other-skils">

        <h2>Other Skills</h2>
        <h3>Adobe Photoshop</h3>
        <h3>Adobe PremierPro</h3>
        <h3>Adobe After Effects</h3>
</div>
</div>`;
    contentBox.innerHTML = skillsText;
}

function education() {
    var educationText =
        `<div class="education block">
    <h2>Education</h2>

    <h4>CODE by Comtrade 2.2019</h4>
    <p>Front-End-developer</p>

    <h4>Self taught 7.2018</h4>
    <p>Self taught Front-End-developer</p>

   
   
</div>`
    contentBox.innerHTML = educationText;
}

function work() {
    var workText =
        `<div class="work block">
    <h2>WORK</h2>
    <h3>Online Ordering Website</h3>
    <p>eCommerce Project</p>

    
    <h3>PSD To HTML/CSS</h3>
    <p>Few projects that i have done</p>
    
    <h3>Movie search (api)</h3>
    <p>Built as a project in CODE by Comtrade school</p>
    
   
    <h3>Star Wars Quiz</h3>
    <p>CocaCola Project For Movie Premiere 2019</p>  <img src="" alt="">
  

   

</div>`;
    contentBox.innerHTML = workText
}
function interasts() {
    interastsText =
        `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi, perspiciatis quas maiores facilis amet optio, eligendi explicabo, eaque molestiae dolore odit? Accusantium ea neque, et non in praesentium quasi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi, perspiciatis quas maiores facilis amet optio, eligendi explicabo, eaque molestiae dolore odit? Accusantium ea neque, et non in praesentium quasi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi, perspiciatis quas maiores facilis amet optio, eligendi explicabo, eaque molestiae dolore odit? Accusantium ea neque, et non in praesentium quasi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi, perspiciatis quas maiores facilis amet optio, eligendi explicabo, eaque molestiae dolore odit? Accusantium ea neque, et non in praesentium quasi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi, perspiciatis quas maiores facilis amet optio, eligendi explicabo, eaque molestiae dolore odit? Accusantium ea neque, et non in praesentium quasi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi, perspiciatis quas maiores facilis amet optio, eligendi explicabo, eaque molestiae dolore odit? Accusantium ea neque, et non in praesentium quasi

</p> `
    contentBox.innerHTML = interastsText;
}