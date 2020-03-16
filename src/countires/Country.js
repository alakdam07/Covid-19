import React from "react";
import styled from "styled-components";
//List of countries in Europe
import Albania from "./Albania";
import Austria from "./Austria";
import Belarus from "./Belarus";
import Belgium from "./Belgium";
import BosniaanHerzegovina from "./BosniaandHerzegovina";
import Bulgaria from "./Bulgaria";
import Croatia from "./Croatia";
import Cyprus from "./Cyprus";
import Czech from "./Czech.js";
import Denmark from "./Denmark";
import Estonia from "./Estonia";
import Finland from "./Finland.js";
import France from "./France.js";
import Germany from "./Germany.js";
import Greece from "./Greece.js";
import Hungary from "./Hungary.js";
import Iceland from "./Iceland";
import Ireland from "./Ireland";
import Italy from "./Italy";
import Latvia from "./Latvia";
import Lithuania from "./Lithuania";
import Luxembourg from "./Luxembourg";
import Malta from "./Malta";
import Maldova from "./Moldova";
import Monaco from "./Monaco";
import Netherlands from "./Netherlands";
import Norway from "./Norway";
import Poland from "./Poland";
import Portugal from "./Portugal";
import Romania from "./Romania";
import Russia from "./Russia";
import Serbia from "./Serbia";
import Slovakia from "./Slovakia";
import Slovenia from "./Slovenia";
import Spain from "./Spain";
import Sweden from "./Sweden";
import Swistzerland from "./Switzerland";
import Ukraine from "./Ukraine";
import UnitedKingdom from "./UnitedKingdom";

function Country() {
  const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(1, auto);
      grid-gap: 10px;
    }
  `;
  const HeadText = styled.div`
    font-size: 40px;
    padding-bottom: 9px;
    font-weight: bold;
    @media (max-width: 600px) {
      font-size: 20px;
      padding-bottom: 5px;
      text-align: center;
      font-weight: bold;
    }
  `;

  return (
    <React.Fragment>
      <HeadText>European countries' Coronavirus figures:</HeadText>
      <StatGrid>
        <Albania />
        <Austria />
        <Belarus />
        <Belgium />
        <BosniaanHerzegovina />
        <Bulgaria />
        <Croatia />
        <Cyprus />
        <Czech />
        <Denmark />
        <Estonia />
        <Finland />
        <France />
        <Germany />
        <Greece />
        <Hungary />
        <Iceland />
        <Ireland />
        <Italy />
        <Latvia />
        <Lithuania />
        <Luxembourg />
        <Malta />
        <Maldova />
        <Monaco />
        <Netherlands />
        <Norway />
        <Poland />
        <Portugal />
        <Romania />
        <Russia />
        <Serbia />
        <Slovakia />
        <Slovenia />
        <Spain />
        <Sweden />
        <Swistzerland />
        <UnitedKingdom />
        <Ukraine />
      </StatGrid>
    </React.Fragment>
  );
}

export default Country;
