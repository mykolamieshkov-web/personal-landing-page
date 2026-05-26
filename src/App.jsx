  import React from 'react';
  import Header from './widgets/Header/';
  import HeroSection from './widgets/HeroSection/';
  import Footer from './widgets/Footer/';
  import PricingSection from './widgets/PricingSection';
  import ProcessSection from './widgets/ProcessSection';

  function App() {
    return (
      <div className="wrapper">
        {/* Комментарий в JSX пишется ТАК, и он не должен «съедать» тег */}
        <Header />

        <main className="main-content">
          <HeroSection />
          <ProcessSection/>
      <PricingSection/>



        </main>

        {/* Если Footer — это отдельный компонент,
            то тег <footer> обычно уже лежит внутри него */}

      </div>
    );
  }

  export default App;