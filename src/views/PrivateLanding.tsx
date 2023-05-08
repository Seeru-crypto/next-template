import React, {useEffect} from "react";
import styled from "styled-components";
import {SessionContextValue, signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";
import {GetRequest} from "@/controller/ApiServices";
import {ReportsSlug} from "@/configs";
import {AuthProps, useAppStore} from "@/zustand/store";

// define new interface for Session, which has a new string property accessToken, imbedded in existing data property
export interface SessionProps extends SessionContextValue {
    data: SessionContextValue['data'] & {
        accessToken: string;
    };
}

const PrivateLanding = (): JSX.Element => {
    const session: SessionProps = useSession() as SessionProps
    const [reports, setReports] = React.useState([])
    const isAuth = useAppStore((state) => state.auth.isAuthenticated)
    const setAuth = useAppStore((state) => state.setAuth)

    useEffect(() => {
        if (session) {
            const jwt = session.data.accessToken
            const name = session.data.user as string

            const auth: AuthProps = {
                name,
                isAuthenticated: true,
                jwt,
            }
            setAuth(auth)
        }
    }, [session])

    const SignoutButton = () => {
        return (
            <Button variant={'secondary'} onClick={() => signOut()}>Sign out</Button>
        );
    }

    const getReports = async () => {
        if (!session.data) return
        const {isLoading, error, data} = await GetRequest({
            url: `/api/${ReportsSlug}`, sessionData: session.data
        })
        if (isLoading) {
            return <div>Loading reports...</div>;
        }
    }

    const getUsers = async () => {
        if (!session.data) return
        const {isLoading, error, data} = await GetRequest({
            url: `/api/${ReportsSlug}`,
            sessionData: session.data
        })
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
            <p>Logged in as {session.data?.user?.name}</p>
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