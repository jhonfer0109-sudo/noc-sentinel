import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Tickets from "../pages/Tickets/Tickets";
import Alerts from "../pages/Alerts/Alerts";
import Clients from "../pages/Clients/Clients";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

import ProtectedRoute from "../components/Auth/ProtectedRoute/ProtectedRoute";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        index
                        element={<Dashboard />}
                    />

                    <Route
                        path="tickets"
                        element={<Tickets />}
                    />

                    <Route
                        path="alerts"
                        element={<Alerts />}
                    />

                    <Route
                        path="clients"
                        element={<Clients />}
                    />

                    <Route
                        path="reports"
                        element={<Reports />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}