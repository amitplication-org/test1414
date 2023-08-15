import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { WithIdNamedIdList } from "./withIdNamedId/WithIdNamedIdList";
import { WithIdNamedIdCreate } from "./withIdNamedId/WithIdNamedIdCreate";
import { WithIdNamedIdEdit } from "./withIdNamedId/WithIdNamedIdEdit";
import { WithIdNamedIdShow } from "./withIdNamedId/WithIdNamedIdShow";
import { WithIdNotNamedIdList } from "./withIdNotNamedId/WithIdNotNamedIdList";
import { WithIdNotNamedIdCreate } from "./withIdNotNamedId/WithIdNotNamedIdCreate";
import { WithIdNotNamedIdEdit } from "./withIdNotNamedId/WithIdNotNamedIdEdit";
import { WithIdNotNamedIdShow } from "./withIdNotNamedId/WithIdNotNamedIdShow";
import { MergeList } from "./merge/MergeList";
import { MergeCreate } from "./merge/MergeCreate";
import { MergeEdit } from "./merge/MergeEdit";
import { MergeShow } from "./merge/MergeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"test1212"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="WithIdNamedId"
          list={WithIdNamedIdList}
          edit={WithIdNamedIdEdit}
          create={WithIdNamedIdCreate}
          show={WithIdNamedIdShow}
        />
        <Resource
          name="WithIdNotNamedId"
          list={WithIdNotNamedIdList}
          edit={WithIdNotNamedIdEdit}
          create={WithIdNotNamedIdCreate}
          show={WithIdNotNamedIdShow}
        />
        <Resource
          name="Merge"
          list={MergeList}
          edit={MergeEdit}
          create={MergeCreate}
          show={MergeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
