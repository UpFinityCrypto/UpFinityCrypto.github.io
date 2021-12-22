function App() {
  return (
  
    <Router>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/test" element={<MainPage />} />
        <Route exact path="/swap" element={<SwapPage />} />
      </Routes>
      
      <Footer />
      
      <div id="debug"></div>
    </Router>
 
  );
}
