import React from "react";
import styled from "styled-components";
import moment from "moment";

function Statistics() {
  const [state, setstate] = React.useState({
    confirmed: "",
    deaths: "",
    recovered: "",
    lastUpdate: ""
  });
  const [loading, setLoading] = React.useState(false);

  const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(1, auto);
      grid-gap: 1rem;
    }
  `;
  const StatBlock = styled.div`
    background: #f2f2f2;
    font-size: 2rem;
    padding: 2rem;
    border-radius: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
  `;
  const DateText = styled.div`
    font-size: 15px;
    text-align: center;
  `;
  const HeadText = styled.div`
    font-size: 40px;
    padding-bottom: 5px;
    font-weight: bold;
    @media (max-width: 600px) {
      font-size: 25px;
      padding-bottom: 5px;
      text-align: center;
      font-weight: bold;
    }
  `;
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://covid19.mathdro.id/api/");
      const data = await response.json();
      //console.log(data);
      setstate({
        confirmed: data.confirmed,
        deaths: data.deaths,
        recovered: data.recovered,
        lastUpdate: data.lastUpdate
      });
    } catch (error) {
      console.log(error, "FAILED TO FETCH");
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <HeadText>Worldwide Coronavirus figures:</HeadText>
      <StatGrid>
        <StatBlock>
          <h3>Confirmed:</h3>
          <span>{state.confirmed.value}</span>
        </StatBlock>
        <StatBlock>
          <h3>Deaths:</h3>
          <span>{state.deaths.value}</span>
          <DateText>
            Last updated: {moment(state.lastUpdate).format("LLLL")}
          </DateText>
        </StatBlock>
        <StatBlock>
          <h3>Recovered:</h3>
          <span>{state.recovered.value}</span>
        </StatBlock>
      </StatGrid>
    </React.Fragment>
  );
}

export default Statistics;
