import React from 'react';
import styled from 'styled-components';

const LandingPage = styled.div`
  text-align: center;
`;

export default function Home() {
  return (
    <LandingPage>
      <img className="align-content-center text-center" src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo-2011-2016.png" height="500px" width="1000px"></img>
    </LandingPage>
  );
}
