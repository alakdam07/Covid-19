import React from "react";
import "./App.css";
import Statistics from "./Statistics";
import Country from "./countires/Country";
import Nav from "./Nav";
import styled from "styled-components";
import ScrollToTop from "./ScrollToTop";
function App() {
  const Section = styled.div`
    padding-bottom: 10px;
  `;

  return (
    <div className="App">
      <Section>
        <Nav />
      </Section>
      <Section>
        <Statistics />
      </Section>
      <Section>
        <Country />
      </Section>
      <ScrollToTop />
    </div>
  );
}

export default App;
