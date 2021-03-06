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
import ListTypeofcatalogs from "../modules/Typeofcatalogs/ListTypeofcatalogs";
import Catalog from "../modules/Catalog/Catalog";
import Companies from "../modules/Companies/Companies";
import Supplier from "../modules/Supplier/Supplier";
import Programming from "../modules/Dashboard/Programming/Programming";
import Employee from "../modules/Employee/Employee";
import ListEmployee from "../modules/Employee/ListEmployee";
import { HomeScreenpurchases } from "../modules/purchases/HomeScreenpurchases";
import Contracts from "../modules/Contracts/Contracts";
import ListContracts from "../modules/Contracts/ListContracts";
import Policy from "../modules/Policy/Policy";
import Attention from "../modules/Attention/Attention";
import ComCatalog from "../modules/Contracts/Catalog/ComCatalog";
import ListComCatalog from "../modules/Contracts/Catalog/ListComCatalog";
import ComTypeofcatalogs from "../modules/Contracts/Typeofcatalogs/ComTypeofcatalogs";
import ComSupplier from "../modules/Contracts/Supplier/ComSupplier";
import ListComSupplier from "../modules/Contracts/Supplier/ListComSupplier";
import buildPolicyClient from "../api/clients/policyClient";
import buildTypeofcatalogClient from "../api/clients/TypeofcatalogsClient";
import buildComTypeofcatalogsClient from "../api/clients/ComTypeofcatalogsClient";
import buildComCatalogClient from "../api/clients/ComCatalogClient";
import buildComSupplierClient from "../api/clients/ComSupplierClient";
import buildCatalogClient from "../api/clients/CatalogClient";
import buildCompaniesClient from "../api/clients/CompaniesClient";
import buildSupplierClient from "../api/clients/SupplierClient";
import ListSupplier from "../modules/Supplier/ListSupplier";
import ListPolicy from "../modules/Policy/ListPolicy";
import ListCatalog from "../modules/Catalog/ListCatalog";
import ListCompanies from "../modules/Companies/ListCompanies";
import ListAttention from "../modules/Attention/ListAttention";
import ListComTypeofcatalogs from "../modules/Contracts/Typeofcatalogs/ListComTypeofcatalogs";
import LaborMedicine from "../modules/LaborMedicine/LaborMedicine";
import ListLaborMedicine from "../modules/LaborMedicine/ListLaborMedicine";
import EditTypeofcatalogs from "../modules/Typeofcatalogs/EditTypeofcatalogs";

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
const typeofcatalogsClient = buildTypeofcatalogClient();
const ComTypeofcatalogsClient = buildComTypeofcatalogsClient();
const ComCatalogClient = buildComCatalogClient();
const ComSupplierClient = buildComSupplierClient();
const catalogClient = buildCatalogClient();
const companiesClient = buildCompaniesClient();
const supplierClient = buildSupplierClient();

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
          <PrivateRoute path="/addEmployee">
            <MainLayout>
              <Employee />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Employee">
            <MainLayout>
              <ListEmployee />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/parameterization">
            <MainLayout>
              <Parameterization />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addCatalog">
            <MainLayout>
              <Catalog CatalogClient={catalogClient} />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Catalog">
            <MainLayout>
              <ListCatalog />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addTypeCatalog">
            <MainLayout>
              <Typeofcatalogs TypeofcatalogsClient={typeofcatalogsClient} />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/EditTypeCatalog/:idTipoCatalogo">
            <MainLayout>
              <EditTypeofcatalogs TypeofcatalogsClient={typeofcatalogsClient}/>
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/TypeCatalog">
            <MainLayout>
              <ListTypeofcatalogs />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Companies">
            <MainLayout>
              <ListCompanies />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addCompanies">
            <MainLayout>
              <Companies CompaniesClient={companiesClient}/>
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Supplier">
            <MainLayout>
              <ListSupplier />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addSupplier">
            <MainLayout>
              <Supplier SupplierClient={supplierClient}/>
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
              <ListContracts />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addContracts">
            <MainLayout>
              <Contracts />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/Attention">
            <MainLayout>
              <ListAttention />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addAttention">
            <MainLayout>
              <Attention />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/ComCatalog">
            <MainLayout>
              <ListComCatalog />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addComCatalog">
            <MainLayout>
            <ComCatalog ComCatalogClient={ComCatalogClient} />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/ComTypeofcatalogs">
            <MainLayout>
              <ListComTypeofcatalogs />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addComTypeofcatalogs">
            <MainLayout>
              <ComTypeofcatalogs ComTypeofcatalogsClient={ComTypeofcatalogsClient} />
            </MainLayout>
          </PrivateRoute>

          <PrivateRoute path="/ComSupplier">
            <MainLayout>
              <ListComSupplier />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addComSupplier">
            <MainLayout>
            <ComSupplier ComSupplierClient={ComSupplierClient} />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/LaborMedicine">
            <MainLayout>
              <ListLaborMedicine />
            </MainLayout>
          </PrivateRoute>
          <PrivateRoute path="/addLaborMedicine">
            <MainLayout>
              <LaborMedicine />
            </MainLayout>
          </PrivateRoute>

          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </ProviderAuth>
  );
}