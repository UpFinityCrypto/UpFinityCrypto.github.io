function App() {
  return (
  
    <Router>
      <Header />
      <Notice />
      <Banner />
      <Hero />
      
      <Stats />
      
      <Ecosystem />
      
      <Audits />
      
      <Listings />
      
      <Team />
      
      
      <Routes>
        <Route exact path="/test" element={<Header />} />
        <Route exact path="/upfinitys" element={<Stats />} />
      </Routes>
      
      <Footer />
      
      <div id="debug"></div>
    </Router>
 
  );
}
