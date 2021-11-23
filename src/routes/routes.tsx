import React from "react";
import useProvideAuth from "../customHooks/useProviderAuth";
import AuthContext from "../providers/authContext";
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
import Programming from "../modules/Dashboard/Programming/Programming";
import Employee from "../modules/Employee/Employee";
import { HomeScreenpurchases } from "../modules/purchases/HomeScreenpurchases";
import Contracts from "../modules/Contracts/Contracts";
import Policy from "../modules/Policy/Policy";
import Attention from "../modules/Attention/Attention";
import ComCatalog from "../modules/Contracts/Catalog/ComCatalog";
import ComTypeofcatalogs from "../modules/Contracts/Typeofcatalogs/ComTypeofcatalogs";
import ComSupplier from "../modules/Contracts/Supplier/ComSupplier";
import buildPolicyClient from "../api/clients/policyClient";
import ListSupplier from "../modules/Supplier/ListSupplier";
import ListPolicy from "../modules/Policy/ListPolicy";
import ListCatalog from "../modules/Catalog/ListCatalog";

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

const policyClient = buildPolicyClient();

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
          <PrivateRoute path="/programacion">
            <MainLayout>
              <Programming />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Empleados">
            <MainLayout>
              <Employee />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/parameterization">
            <MainLayout>
              <Parameterization />
            </MainLayout>
          </PrivateRoute>

          <PrivateRoute path="/addCatalog">
            <MainLayout>
              <Catalog />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Catalog">
            <MainLayout>
              <ListCatalog />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Companies">
            <MainLayout>
              <Companies />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Supplier">
            <MainLayout>
              <ListSupplier />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addSupplier">
            <MainLayout>
              <Supplier />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/purchases">
            <MainLayout>
              <HomeScreenpurchases />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addPolicy">
            <MainLayout>
              <Policy policyClient={policyClient} />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Policy">
            <MainLayout>
              <ListPolicy />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Contracts">
            <MainLayout>
              <Contracts />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Attention">
            <MainLayout>
              <Attention />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/ComCatalog">
            <MainLayout>
              <ComCatalog />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/ComTypeofcatalogs">
            <MainLayout>
              <ComTypeofcatalogs />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/ComSupplier">
            <MainLayout>
              <ComSupplier />
            </MainLayout>
          </PrivateRoute>

          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </ProviderAuth>
  );
}