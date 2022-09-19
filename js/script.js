//Check if There is  Local Storge Option
let mainColors = localStorage.getItem("color_option");
console.log(mainColors);
if(mainColors !== null){


 console.log('Local Stroge Is Not Empty You Can Set It On Root Now');
 console.log(localStorage.getItem("color_option"));
 document.documentElement.style.setProperty('--main-color',mainColors);

 document.documentElement.style.setProperty('--main-color',mainColors );

  //Remove Active class From Color List Items
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

     //Add Active Class on Element whith Data-Color === Local Stroge Item
     if(element.dataset.color === mainColors){

        //Add Active Class
        element.classList.add("active");
     }
});
 


}

//Random Background Option 
let backgroundOption = true;

//Varibal to Control The Intravial
let backgroundIntervial;

//check if there's local stroge Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// check if random background local storage is not empty
if (backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){
        backgroundOption = true;

    }else{
        backgroundOption = false;
    }
    //Remove Active Class From All Span
    document.querySelectorAll(".random-backgrounds span").forEach(element =>{

        element.classList.remove("active");
    });

    if(backgroundLocalItem === 'true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }else{
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}


//Toggle Spin On Icon
document.querySelector(".toggle-settings .ters").onclick = function (){

//Toggle Class fa-spin For Rotation On Self
    this.classList.toggle("fa-spin")
//  Toggle Class Open On Main Setting-box  
    document.querySelector(".sittings-box").classList.toggle("open")
};

//switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

//Loop on ALL List Items
colorsLi.forEach(li => {
    //click on Every List Items
    li.addEventListener("click",(e) =>{
    console.log(e.target.dataset.color);

    //set color On root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    //Set Color on local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

    });

});

//switch Random Background Intrival Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

//loop On All Spans
randomBackEl.forEach(span => {
    
    //click On Every Span
    span.addEventListener("click",(e) => {

        handleActive(e);

        if(e.target.dataset.background === 'yes'){
            backgroundOption =true;
            randomizeImgs();

            localStorage.setItem("background_option",true);

        }else{
            backgroundOption = false;
            clearInterval(backgroundIntervial);
            localStorage.setItem("background_option",false);
        }

    });
});


//Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imgs
let imgsArray = ["01.jpeg","02.jpeg","03.jpeg","04.jpeg","05.jpeg"];


//Function To Randomize Imgs
function randomizeImgs(){
    if(backgroundOption === true){

        backgroundIntervial = setInterval(() =>{
            //Get Random Number
             let randomNumber = Math.floor(Math.random() * imgsArray.length);
          
             //Change Background Imgs Url
          landingPage.style.backgroundImage = 'url("imgs/' + imgsArray [randomNumber ] + '")';
              //console.log(randomNumber);
          },4000);

    }
}
randomizeImgs();



// //Select Skills Selector
// let ourSkills = document.querySelector(".skills");

//  window.onscroll = function(){

//    //Skills Offset Top
//    let skillsOffsetTop = ourSkills.offsetTop;


//    //Skills Outer height
//    let skillsOuterHeight = ourSkills.offsetHeight;
   

//     //Window Height 
//     let windowHeight = this.innerHeight;


//     //Window ScrollTop
//     let windowScrollTop = this.pageYOffset; 

//    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight -windowHeight)){

//     let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

//     allSkills.forEach(skill => {

//         skill.style.width = skill.dataset.progress;
//     })

//    }
// }



//Craete Popup Wiht The Imge
let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img => {

    img.addEventListener('click',(e) => {

        //Create Overlay Element
        let Overlay = document.createElement("div");

        //Add Class To overlay 
        Overlay.className = 'popup-overlay';

        //Append Overlay To The Body
        document.body.appendChild(Overlay);

        //Create Popup
        let popupBox = document.createElement("div");

        //Add Class To popupBox
        popupBox.className= 'popup-box';


        if (img.alt !== null){

            //Create Heading
            let imgHeading = document.createElement("h3");

            //Creat Text For Heading
            let imgText = document.createTextNode(img.alt);

            //Append The To The Heading
            imgHeading.appendChild(imgText);

            //Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
            

        }




        //Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        //Add Image To PopupBox
        popupBox.appendChild(popupImage);

        //Append Popup Box To The Body
        document.body.appendChild(popupBox);

        
        //Create The Close Span
        let closeButton = document.createElement("span");

        //Craet The Close Button Text
        let closeButtonText = document.createTextNode("X");

        //Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        //Add Class To Close Button
        closeButton.className = 'close-button';

        //Add Close Btton To Popup Box
        popupBox.appendChild(closeButton);

      

    });

});

//Close Popup 
document.addEventListener("click",function(e){

    if (e.target.className == 'close-button'){

        //Remove The Current Popup
        e.target.parentNode.remove();

        //Remove Overlay 
        document.querySelector(".popup-overlay").remove();
    }

});


//Select All Bulltes
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {
 
//     bullet.addEventListener("click",(e) =>{

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'

//         });

//     });

// });

//Select All Links
const allLinks = document.querySelectorAll(".links a");

// allLinks.forEach(link => {
 
//     link.addEventListener("click",(e) =>{

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'

//         });

//     });

// });

function scrollToSomeWhere(elements){

    

    elements.forEach(ele => {
 
    ele.addEventListener("click",(e) =>{

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });

    });

});

}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

//Hndle Active State
function handleActive(ev){

    
        //remove Active Class From All Spans
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });

        //Add Active class on self
        ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

 if(bulletLocalItem !== null){

    bulletsSpan.forEach(span => {

        span.classList.remove('active');

        

    });

    if(bulletLocalItem === 'block'){

        bulletsContainer.style.display = 'block'
        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{
        bulletsContainer.style.display = 'none'

        document.querySelector(".bullets-option .no").classList.add("active");
    }


 }

bulletsSpan.forEach(span => {

    span.addEventListener("click",(e) => {


        if(span.dataset.display ==='show'){

            bulletsContainer.style.display = 'block'

            localStorage.setItem("bullets_option",'block');

        }else{
            bulletsContainer.style.display = 'none'

            localStorage.setItem("bullets_option",'none');
        }

        handleActive(e);

    });

});

//Rest Button
document.querySelector(".reset-options").onclick = function (){

    localStorage.clear()
    // localStorage.removeItem("background_option");
    // localStorage.removeItem("color_option");
    // localStorage.removeItem("bullets_option");
    window.location.reload();
    
};

const hamburger = document.querySelector('.header .container .links-container .hamburger');
const mobile_menu = document.querySelector('.header .container .links-container ul');
const menu_item = document.querySelectorAll('.header .container .links-container ul li a');
const header = document.querySelector('.header .container');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#000';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

