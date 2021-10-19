import React from "react";
import useProvideAuth from "../customHooks/useProviderAuth";
import AuthContext from "../providers/authContext";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { LoginScreen } from "../modules/Auth/Login/LoginScreen";
import useAuth from "../customHooks/useAuth";
import { HomeScreen } from "../modules/Dashboard/Home/HomeScreen";
import { MainLayout } from "../layout/MainLayout";
import { Parameterization } from "../modules/Parameterization/Parameterization";
import { Register } from "../modules/Register/Register";
import QuestionCovid from "../modules/QuestionCovid/QuestionCovid";
import Typeofcatalogs from "../modules/Typeofcatalogs/Typeofcatalogs";
import Catalog from "../modules/Catalog/Catalog";
import Companies from "../modules/Companies/Companies";
import Supplier from "../modules/Supplier/Supplier";


type Props = {
  children?: React.ReactNode;
};

const ProviderAuth: React.FC<Props> = ({ children }) => {
  return (
    <AuthContext.Provider value={useProvideAuth()}>
      {children}
    </AuthContext.Provider>
  );
};

function PrivateRoute({ children, ...rest }: RouteProps) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function RoutesApp() {
  return (
    <ProviderAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/question-covid">
            <QuestionCovid />
          </Route>
          <PrivateRoute path="/home">
            <MainLayout>
              <HomeScreen />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/parameterization">
            <MainLayout>
              <Parameterization />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Typeofcatalogs">
            <MainLayout>
              <Typeofcatalogs/>
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Catalog">
            <MainLayout>
              <Catalog/>
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Companies">
            <MainLayout>
              <Companies/>
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Supplier">
            <MainLayout>
              <Supplier/>
            </MainLayout>
          </PrivateRoute>
          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </ProviderAuth>
  );
}
