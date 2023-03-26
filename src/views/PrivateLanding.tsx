import React from "react";
import styled from "styled-components";

const PrivateLanding = (): JSX.Element => {
    return (
        <PrivateLandingStyle>
            <h1>Private Landing</h1>
        </PrivateLandingStyle>
    );
};

export default PrivateLanding;

const PrivateLandingStyle = styled.div`
    border: 1px solid ${({ theme }) => theme.text};
`