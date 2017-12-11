import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import FormModel from "./pages/FormExample";
import ModalExample from "./pages/ModalExample";
import ServiceExample from "./pages/ServiceExample";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={FormModel}></IndexRoute>
      <Route path="modal-example(/:modal-example)" name="modal-example" component={ModalExample}></Route>
      <Route path="service-example" name="service-example" component={ServiceExample}></Route>
    </Route>
  </Router>,
app);