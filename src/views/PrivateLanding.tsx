import React, {useEffect} from "react";
import styled from "styled-components";
import {signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";
import {FindAllReports} from "@/requests";

const PrivateLanding = (): JSX.Element => {
    const {data: session} = useSession()
    const [reports, setReports] = React.useState([])

    const SignoutButton = () => {
        return (
            <Button variant={'secondary'} onClick={() => signOut()}>Sign out</Button>
        );
    }

    const getReports = async () => {
        console.log("HERE")
        const {isLoading, error, data} = await FindAllReports()
        console.log(data)
        if (isLoading) {
            return <div>Loading reports...</div>;
        }
    }

    return (
        <PrivateLandingStyle>
            <h1>Private Landing</h1>
            <Button variant={"primary"} onClick={() => getReports()}>Get reports!</Button>
            <p>Nr of reports: {reports.length}</p>
            <p>Logged in as {session?.user?.name}</p>
            <SignoutButton />
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