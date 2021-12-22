function Audits() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Audits">
      <div className="section-title">
        <h2>Audits</h2>
      </div>

      <div className="row">
        <div className="col-12 col-lg-2 center">
          <a href="https://dessertswap.finance/audits/Upfinity-Audit-BSC-13335222.pdf" target="_tab">
            Audited with 0 Issue by:
            <img src="https://dessertswap.finance/images/logo2.png" style={widthFull}/>
          </a>
        </div>
        <div className="col-12 col-lg-2 center">
          <a href="https://bitriseaudits.com/project/129" target="_tab">
            <img src="https://bitriseaudits.com/images/logo.png" style={widthFull}/>
          </a>
        </div>
      </div>
    </section>
  );
}
