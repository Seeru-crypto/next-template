import React from 'react';
import styled from "styled-components";
import Button from "../components/Button";

const PublicLanding = (): JSX.Element => {
    return (
        <PublicLandingStyle>
            <h1>Public Landing</h1>
            <div className="btnGrp">
                <Button variant={'primary'} onClick={() => console.log("Login")}>Log in</Button>
                <Button variant={'secondary'} onClick={() => console.log("register")}>Register</Button>
            </div>
        </PublicLandingStyle>
    );
};

export default PublicLanding;

const PublicLandingStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 2rem;
  
  .btnGrp {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  `