import React from 'react';

function Community() {
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
    <section id="Community">
      <Testimonials />
      <Gallery />
    </section>
  );
}

export function Testimonials() {
  return (
  <section id="Testimonials">
    <div className="container">

      <div className="section-title">
        <h2>Testimonials</h2>
        <p>Comments by people who believes in our <span>PONTENTIAL</span></p>
      </div>

      <div className="testimonials-slider swiper" data-aos="" data-aos-delay="100">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture5.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture6.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture9.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture3.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture2.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture4.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture12.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture11.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture1.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture10.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture2.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
          
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/Capture8.PNG" className="testimonial-img" alt=""/>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
  );
}

export function Gallery() {
  const imgStyle = {width: "400px", height: "300px"};
  
  return (
    <section id="Gallery">
      <div className="container">

        <div className="section-title">
          <h2>Gallery</h2>
          <p><span>Precious</span> contents made by our community members </p>
        </div>

        <div className="testimonials-slider swiper" data-aos="" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/upfinity with music.mp4" type="video/mp4" className="testimonial-img" alt=""/>
                </video>
              </div>
            </div>    
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/gallery/photo_2021-10-13_10-46-05.jpg" className="testimonial-img" alt="" style={imgStyle}/>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/gallery/gallery0.jpg" className="testimonial-img" alt="" style={imgStyle}/>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/gallery/photo_2021-10-13_08-29-48.jpg" className="testimonial-img" alt="" style={imgStyle}/>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/doc_2021-10-12_09-11-57.mp4" type="video/mp4" className="testimonial-img" alt=""/>
                </video>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/doc_2021-10-12_09-12-34.mp4" type="video/mp4" className="testimonial-img" alt=""/>
                </video>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/litgif.gif.mp4" type="video/mp4" className="testimonial-img" alt=""/>
                </video>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/gallery/photo_2021-10-06_16-59-34.jpg" className="testimonial-img" alt="" style={imgStyle}/>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/Rocketsq.gif.mp4" type="video/mp4" className="testimonial-img" alt="" style={imgStyle}/>
                </video>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/gallery/photo_2021-10-12_09-11-28.jpg" className="testimonial-img" alt="" style={imgStyle}/>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/Upfin4.gif.mp4" type="video/mp4" className="testimonial-img" alt=""/>
                </video>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="testimonial-item">
                <video controls muted>
                  <source src="assets/img/gallery/UPFINITY BURNING EVENT (1).gif.mp4" type="video/mp4" className="testimonial-img" alt=""/>
                </video>
              </div>
            </div>    
            
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </section>
  );
}
export default Community;
