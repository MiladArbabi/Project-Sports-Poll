import React from 'react'
import styled from 'styled-components';

const PollInfo = ({ name, country, state, sport }) => (
  <CardInfo>
    <div className="pollInfo">
      <div className="name">{name}</div>
      <div className="country">{country}</div>
      <div className="sport">{sport}</div><br />
      <div className="state">{state}</div><br />
    </div>
  </CardInfo>
)

const CardInfo = styled.div`
  max-height: 40%;
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

export default PollInfo;

