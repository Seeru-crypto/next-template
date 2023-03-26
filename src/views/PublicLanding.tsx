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
  border: 1px solid ${({ theme }) => theme.text};
  `