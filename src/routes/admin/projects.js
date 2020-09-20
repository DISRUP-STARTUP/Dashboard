import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Project = lazy(() => import('../../container/project/Project'));
const ProjectDetails = lazy(() => import('../../container/project/ProjectDetails'));

const ProjectRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/main/projectDetails/:id`} component={ProjectDetails} />
      <Route path={`${path}/main`} component={Project} />
    </Switch>
  );
};

export default ProjectRoutes;
