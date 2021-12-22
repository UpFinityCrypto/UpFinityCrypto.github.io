console.log('init');
displayText('debug', 'init');
t = T();

body = select('body');
bodyClassList = body.classList;
bodyClassList.add('container');
bodyClassList.add('center');
bodyClassList.add('text-center');
body.style.width = 'auto';
body.style.height = 'auto';

header = select('header#header');
headerClassList = header.classList;
headerClassList.add('header');
headerClassList.add('fixed-top');
headerClassList.add('d-flex');
headerClassList.add('align-items-center');
headerClassList.add('header-scrolled');
header.style.width = 'auto';


async function loadHeader() { // header load first
  var div = $('#header');
  
  $.ajax({
    url: "sections/Header.html", 
    success: function(response) {
      div.append($(response));
      
      on('click', '.mobile-nav-toggle', function (e) {
        select('body').classList.toggle('mobile-nav-active')
        select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
      })

      /**
      * Mobile nav dropdowns activate
      */
      on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
        }
      }, true)
    }
  });
  
  return true; 
}

async function loadSections() {
  t = TT('sections loading', t);

  
  getExtFile('Swap', 'sections/Swap.html');
  getExtFile('Fiat', 'sections/Fiat.html');

  getExtFile('Donations', 'sections/Donations.html');
  getExtFile('Ecosystem', 'sections/Ecosystem.html');
  getExtFile('footer', 'sections/Footer.html'); // footer
  // getExtFile('Gallery', 'sections/Gallery.html');

  // getExtFile('hero', 'sections/Home.html'); // hero
  getExtFile('Motivation', 'sections/Motivation.html');
  getExtFile('Notice', 'sections/Notice.html');
  getExtFile('Patchs', 'sections/Patchs.html');
  getExtFile('Roadmap', 'sections/Roadmap.html');
  // getExtFile('Testimonials', 'sections/Testimonials.html');
  getExtFile('Team', 'sections/Team.html');

  getExtFile('Audits', 'sections/Audits.html');
  getExtFile('Mysterybox', 'sections/Mysterybox.html');
  getExtFile('P2egames', 'sections/P2egames.html');
}

async function loadSubsections() {
  t = TT('subsections loading', t);
  needValue = false;
  needValue |= getExtFile('Airdrop', 'sections/Airdrop.html');
  needValue |= getExtFile('FAQs', 'sections/FAQs.html');
  needValue |= getExtFile('Features', 'sections/Features.html');
  needValue |= getExtFile('Rewards', 'sections/Rewards.html');
  needValue |= getExtFile('SAFUs', 'sections/SAFUs.html');
  needValue |= getExtFile('Status', 'sections/Status.html');
  needValue |= getExtFile('Stats', 'sections/Stats.html');
  needValue |= getExtFile('Taxs', 'sections/Taxs.html');
  needValue |= getExtFile('UpFinomics', 'sections/UpFinomics.html');
  needValue |= getExtFile('Staking', 'sections/Staking.html');
  needValue |= getExtFile('navbar', 'sections/Navbar.html');
}

NOW = Date.now();

t = TT('init done', t);
displayText('debug', 'init done');

$('#popup').show();
$(document).click(function (e) {
  if ($('#popup').is(':visible')) {
    $('#popup').hide();
  }
});


window.addEventListener('load', async () => {
  loadSections()
    .then(loadSubsections)
    .then(loadCaches)
    .then(displayCaches)
    .then(runCode)
    .then(init)
    .then(init_)
    .then(loadHeader);
});

// function getElem(a, b) {
//   return '<img src="https://theupfinity.com/assets/img/logo.png" style="' + getStyle(a, b) + '">';
// }
// function getStyle(a, b) {	
//   p = a - 10 / 2;
//   q = b - 10 / 2;
//   return "position: absolute; top: " + String(p) + "%; left: " + String(q) + "%; width: 10%";
// }

// function getFour(a, b, w) {
//   console.log(v, w);
//   return [[a - w, b - w], [a - w, b + w], [a + w, b - w], [a + w, b + w]];
// }
// v = 50
// str = "";
// str += getElem(v, v);
// for (pos of getFour(v, v, v/2)) {
//   str += getElem(pos[0], pos[1]);
//   for (pos_ of getFour(pos[0], pos[1], v/5)) {
// 	str += getElem(pos_[0], pos_[1]);
//   }
// }
// document.getElementById('test').innerHTML = str;


// arbor.js
// JavaScript InfoVis Toolkit
// d3.js
