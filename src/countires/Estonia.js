// eslint-disable-entire-line
import React from "react";
import styled from "styled-components";
import moment from "moment";

function Estonia() {
  // eslint-disable-next-line
  const [Country, setCountry] = React.useState("EE");
  // eslint-disable-next-line
  const [loading, setLoading] = React.useState(false);
  const [state, setstate] = React.useState({
    confirmed: "",
    deaths: "",
    recovered: "",
    lastUpdate: ""
  });

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
    grid-column: 2 / span 12;
    border-radius: 1rem;
    display: grid;
    @media (max-width: 600px) {
      background: #f2f2f2;
      font-size: 3rem;
      padding: 3rem;
      border-radius: 2rem;
      display: grid;
    }
  `;

  const Text = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  `;

  const SubText = styled.div`
    font-size: 20px;
    text-align: center;
  `;

  const DateText = styled.div`
    font-size: 15px;
    text-align: center;
  `;

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${Country}`
      );
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
      <StatGrid>
        <StatBlock>
          <Text>Estonia</Text>
          <SubText>Confirmed:{state.confirmed.value}</SubText>
          <SubText>Deaths: {state.deaths.value}</SubText>
          <SubText>Recovered: {state.recovered.value}</SubText>
          <DateText>
            Last updated: {moment(state.lastUpdate).format("LLLL")}
          </DateText>
        </StatBlock>
      </StatGrid>
    </React.Fragment>
  );
}

export default Estonia;
