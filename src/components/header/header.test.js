import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {noop, adaptedLoginDataMock} from "../../store/test-data";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

it(`Render Header`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Header
          getLoginData={noop}
          isLoading={true}
          loginData={adaptedLoginDataMock}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
