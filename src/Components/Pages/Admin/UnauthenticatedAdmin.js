import React, {useState} from 'react';
import GridContainer from "../../Common/Grid/GridContainer";
import InputText from "../../Common/InputText";
import Button from "../../Common/Button";
import {useMutation} from "@apollo/react-hooks";
import {ADMIN} from "../../../GraphQL/Admin";
import {gql} from "apollo-boost";
import {LinearProgress} from "@material-ui/core";

const TOGGLE_AUTH = gql`
  mutation ToggleAuth($token: String!) {
    toggleAuth(token: $token) @client
  }
`;

export default function UnauthenticatedAdminPage() {
    const [user, setUser] = useState({username: "", password: ""});

    const JWT = ADMIN.MUTATION.LOGIN(user.username, user.password);
    const [loginUser, { loading }] = useMutation(JWT);
    const [toggleAuth] = useMutation(TOGGLE_AUTH);

    function login(){
        loginUser({ variables: { username: user.username, password: user.password} }).then(res => {
            console.log(res.data.login.token);
            toggleAuth({ variables: { token: res.data.login.token } })
        });
    }

    if(loading) return <LinearProgress/>;

    return (
        <div className="page page-admin">
            <div className="page-container">
                <div className="page-title">
                    <h1>Admin Panel</h1>
                    <p>With great power comes great responsibility.</p>
                </div>
                <GridContainer>
                    <InputText id="admin-username" label="Username" onChange={e => setUser({...user, username: e.target.value})} value={user.username} />
                    <InputText id="admin-password" label="Password" mask="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password} />
                </GridContainer>
                <Button title="Login" status="default" onClick={login} />
            </div>
        </div>
    )
}