import React from 'react';
import styled from "styled-components";

const PublicLanding = (): JSX.Element => {
    return (
        <PublicLandingStyle>
            <h1>Public Landing</h1>
        </PublicLandingStyle>
    );
};

export default PublicLanding;

const PublicLandingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 2rem;
  `