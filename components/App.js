function App() {
  return (
  
    <Router>
      <Header />
      
      <DashboardPage />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/test" element={<MainPage />} />
        <Route exact path="/swap" element={<SwapPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
      </Routes>
      
      <Footer />
      
      <div id="debug"></div>
    </Router>
 
  );
}
