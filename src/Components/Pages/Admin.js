import React from 'react';
import AuthenticatedAdminPage from "./Admin/AuthenticatedAdmin";
import UnauthenticatedAdminPage from "./Admin/UnauthenticatedAdmin";

export default function AdminPage() {
    const authenticated = true;

    if(authenticated){
        return <AuthenticatedAdminPage/>
    } else {
        return <UnauthenticatedAdminPage/>
    }
}