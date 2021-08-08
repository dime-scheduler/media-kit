import React from "react";

//Help Center
const HelpCenterOverview = React.lazy(() =>
  import("./pages/index")
);

const routes = [

  { path: "/", component: HelpCenterOverview, isWithoutLayout: false, exact: true }
];

export default routes;
