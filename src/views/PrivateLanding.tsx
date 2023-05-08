import React from "react";
import styled from "styled-components";
import {SessionContextValue, signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";
import {GetRequest} from "@/controller/ApiServices";
import {ReportsSlug, UsersSlug} from "@/configs";

export interface Props extends  SessionContextValue<boolean>{
}

const PrivateLanding = (): JSX.Element => {
    const {data: sessionData} = useSession()
    const [reports, setReports] = React.useState([])
    const jwtToken = sessionData.accessToken as string

    const SignoutButton = () => {
        return (
            <Button variant={'secondary'} onClick={() => signOut()}>Sign out</Button>
        );
    }

    const getReports = async () => {
        const {isLoading, error, data} = await GetRequest(`/api/${ReportsSlug}`, jwtToken)
        if (isLoading) {
            return <div>Loading reports...</div>;
        }
    }

    const getUsers = async () => {
        const {isLoading, error, data} = await GetRequest(`/api/${UsersSlug}`, jwtToken)
        if (isLoading) {
            return <div>Loading reports...</div>;
        }
    }

    return (
        <PrivateLandingStyle>
            <h1>Private Landing</h1>
            <Button variant={"primary"} onClick={() => getReports()}>Get reports!</Button>
            <Button variant={"secondary"} onClick={() => getUsers()}>Get users!</Button>
            <p>Nr of reports: {reports.length}</p>
            <p>Logged in as {sessionData?.user?.name}</p>
            <SignoutButton/>
        </PrivateLandingStyle>
    );
};

export default PrivateLanding;

const PrivateLandingStyle = styled.div`
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