import React from 'react';

function FAQs() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font3em = {fontSize: "3em"};
  const font0_5em = {fontSize: "0.5em"};
  
  const divStyle = {width: "20px", height: "20px"};
  
  return (
    <section id="FAQs">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Get your answer easily in here</p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="" aria-expanded="true">Is Reward preserved for each wallet?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" className="collapse show" data-bs-parent=".faq-list">
                <p>Yes! Unlike other token's reward system, it does not reduce your current portion.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="" aria-expanded="true">How can I claim the reward?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" className="collapse show" data-bs-parent=".faq-list">
                <p>Check our website!</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="" aria-expanded="true">Is there a minimum amount to get reward?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" className="collapse show" data-bs-parent=".faq-list">
                <p>No Minimum!</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="" aria-expanded="true">Is there a minimum cooltime to get reward?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" className="collapse show" data-bs-parent=".faq-list">
                <p>No cooltime! Take your claim whenever you want</p>
              </div>
            </li>
            
            <li data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed" aria-expanded="false">Why Token Upgradable? Is it SAFU?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>I have written a text in <span>IMPORTANT NOTICE</span> about this.</p>
                <p>TL;DR: To add new feature over and over to make this token greater. Based on that text, I hope I have gained your trust.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed" aria-expanded="false">Any Plans of doing doxx?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>I have done the KYC Verification! (Find 'UpFinity' in <a href="https://www.dessertswap.finance/dessertdoxxed.html">DessertDoxxed</a>)</p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>


    </section>
  );
}

export default FAQs;
