import React from 'react';

function Team() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthHalf = {width: "50%"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Team">
      <div className="section-title">
        <h2>Team</h2>
      </div>

      <div className="row">
        <div className="col-12 col-md-3 text-justify content">
          <h3>ALLCOINLAB</h3>
          <h6>Founder / Lead Dev</h6>
          <p>Seoul, South Korea 🇰🇷</p>
          <a href="https://www.dessertswap.finance/dessertdoxxed.html">
            <img src="assets/img/team/labs_cropped.png" style={{widthHalf}}/>
          </a>
          <div className="row">
            <div className="col-3 center">
              <a href="https://t.me/ALLCOINLAB" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
            </div>
            <div className="col-3 center">
              <a href="https://www.dessertswap.finance/dessertdoxxed.html" target="_tab">KYC DOXX</a>
            </div>
          </div>
          <p>This shy founder is the mastermind developer behind all UpFinity's infrastructure. 
            Whatever crazy idea you can think of, LAB will make it happen, like magic.
            It is rumored he doesn't sleep and when he says something "will take long time", he will have it done in 15 minutes.
          </p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Angel</h3>
          <h6>Lead Marketing / Operations</h6>
          <p>USA 🇺🇸</p>
          <a href="https://www.instagram.com/iangel.png">
            <img src="assets/img/team/Angel.png" style={{widthHalf}}/>
          </a>
          <div className="row">
            <div className="col-3 center">
              <a href="https://t.me/iangeltg" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
            </div>
            <div className="col-3 center">
              <a href="https://www.instagram.com/iangel.png" target="_tab" className="telegram"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <p>
            He is the link between all the UpFinity's mechanisms.
            He makes sure everything is working smoothly to acheive the team's daily goals and organizes the marketing strategies.
            Don't say something cannot be done because he surely will prove you wrong.
            Legend says he wakes up every morning chanting "To UpFinity and Beyond"
          </p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Isa</h3>
          <h6>Lead Artist</h6>
          <p>Brazil 🇧🇷</p>
          <a href="https://isazolik.artstation.com">
            <img src="assets/img/team/isa_cropped.png" style={{widthHalf}}/>
          </a>
          <div className="row">
            <div className="col-3 center">
              <a href="https://t.me/isazolik" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
            </div>
            <div className="col-3 center">
              <a href="https://isazolik.artstation.com" target="_tab" className="telegram"><i className="bi bi-pencil"></i></a>
            </div>
          </div>
          <p>
            She spends her days behind a sketch book.
            Her love and passion for art and design has lead her to work for multiple big titles.
            She joined UpFinity's team seeking a taste for the NFT world and quickly fell in love with the project.
          </p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Zag</h3>
          <h6>Community Manager</h6>
          <p>USA 🇺🇸</p>
          <a href="https://www.instagram.com/zagann">
            <img src="assets/img/team/zagfinity.png" style={{widthHalf}}/>
          </a>
          <div className="row">
            <div className="col-3 center">
              <a href="https://t.me/ZagFinity" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
            </div>
            <div className="col-3 center">
              <a href="https://www.instagram.com/zagann" target="_tab" className="telegram"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <p>
            Zag is the core behind our community platforms.
            A night owl with a kind heart and a chill vibe that will always be looking to make our community feel welcome.
            Just don't fud around him though.
          </p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Kami</h3>
          <h6>Artist</h6>
          <a href="https://kamiolive.artstation.com">
            <img src="assets/img/team/Kami_cropped.png" style={{widthHalf}}/>
          </a>
          <div className="row">
            <div className="col-3 center">
              <a href="https://kamiolive.artstation.com" target="_tab" className="telegram"><i className="bi bi-pencil"></i></a>
            </div>
          </div>
          <p>
           This shy artist with lots of potential doesn't talk much but she lets her skills with the pen do all the talking.
          </p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Felipi</h3>
          <h6>Freelancers</h6>
          <a href="https://www.artstation.com/felipibonetti">
            <img src="assets/img/team/felippi_cropped.png" style={{widthHalf}}/>
          </a>
          <div>
            <a href="https://www.artstation.com/felipibonetti" target="_tab" className="telegram"><i className="bi bi-pencil"></i></a>
          </div>
          <p>Artist behind our next NFT game!</p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Milton</h3>
          <h6>Freelancers</h6>
          <a href="">
            <img src="assets/img/team/milton_cropped.png" style={{widthHalf}}/>
          </a>
          <p>Developer behind our next NFT game!</p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>under construction. adding more!</h3>
        </div>
      </div>
    </section>
  );
}

export default Team;