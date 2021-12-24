t = T();
t = TT('START', t);

document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

async function loadHeader() { // header load first
  header = select('header#Header');
  headerClassList = header.classList;
  headerClassList.add('header');
  headerClassList.add('fixed-top');
  headerClassList.add('d-flex');
  headerClassList.add('align-items-center');
  headerClassList.add('header-scrolled');
  header.style.width = 'auto';
  
  await initHeader();
  
  //var div = $('#Header');
  
  //$.ajax({
  //  url: "sections/Header.html", 
  //  success: async function(response) {
  //    div.append($(response));
      
  //    await initHeader();
  //  }
  //});
  
  return true; 
}

async function loadFooter() {
}

async function loadSections() {
  t = TT('sections loading', t);

  
  getExtFile('Fiat', 'sections/Fiat.html');

  getExtFile('Donations', 'sections/Donations.html');

  getExtFile('Motivation', 'sections/Motivation.html');
  getExtFile('Notice', 'sections/Notice.html');
  getExtFile('Patchs', 'sections/Patchs.html');
  getExtFile('Roadmap', 'sections/Roadmap.html');

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
  needValue |= getExtFile('Taxs', 'sections/Taxs.html');
  needValue |= getExtFile('UpFinomics', 'sections/UpFinomics.html');
  needValue |= getExtFile('Staking', 'sections/Staking.html');
  needValue |= getExtFile('navbar', 'sections/Navbar.html');
}

NOW = Date.now();

$('#popup').show();
$(document).click(function (e) {
  if ($('#popup').is(':visible')) {
    $('#popup').hide();
  }
});


window.addEventListener('load', async () => {
  console.log('done');

  body = select('body');
  bodyClassList = body.classList;
  bodyClassList.add('container');
  bodyClassList.add('center');
  bodyClassList.add('text-center');
  bodyClassList.add('text-middle');
  body.style.width = 'auto';
  body.style.height = 'auto';
  
  loadHeader()
    .then(loadFooter)
    .then(runInit)
    .then(() => {
       t = TT('DONE', t);
    });

  $(".yoke").click(function () {
    if ($("body").hasClass("night")) {
      $("body").removeClass("night");
      $(".box").removeClass("boxedin");
      $(".switch").removeClass("switchedin");
      $(".te").removeClass("teedin");
      $("body").addClass("day");
      $(".yoke").addClass("unyoked");
      $(".box").addClass("boxedout");
      $(".switch").addClass("switchedout");
      $(".te").addClass("teedout");
    } else {
      $(".yoke").removeClass("unyoked");
      $(".switch").removeClass("switchedout");
      $(".te").removeClass("teedout");
      $("body").removeClass("day");
      $(".box").removeClass("boxedout");
      $(".yoke").addClass("yoked");
      $("body").addClass("night");
      $(".box").addClass("boxedin");
      $(".switch").addClass("switchedin");
      $(".te").addClass("teedin");
    }
  });
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
