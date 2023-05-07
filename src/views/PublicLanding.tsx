import React from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import {signIn} from "next-auth/react";

const PublicLanding = (): JSX.Element => {
    const [reports, setReports] = React.useState([])

    const getReports = async () => {
    }

    return (
        <PublicLandingStyle>
            <div>
                <h1>Public Landing</h1>
                <Button variant={"primary"} onClick={() => getReports()}>Get reports!</Button>
                <p>Nr of reports: {reports.length}</p>
            </div>
            <div className="btnGrp">
                <Button variant={'primary'} onClick={() => signIn()}>Log in</Button>
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
  border: 1px solid ${({theme}) => theme.text};
  padding: 2rem;
  
  .btnGrp {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  `