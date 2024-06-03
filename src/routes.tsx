import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/layouts/app";
import { NotFound } from "./pages/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Occurrences } from "./pages/app/occurrences/occurrences";
import { Tracking } from "./pages/app/tracking/tracking";
import { Contacts } from "./pages/app/contacts/contacts";
import { AuthLayout } from "./pages/layouts/auth";
import { SignIn } from "./pages/auth/sign-In";
import { SignUp } from "./pages/auth/sign-up";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/occurrences', element: <Occurrences /> },
            { path: '/tracking', element: <Tracking /> },
            { path: '/contacts', element: <Contacts /> }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sign-in', element: <SignIn />, },
            { path: '/sign-up', element: <SignUp />, },
        ]
    }
]);
