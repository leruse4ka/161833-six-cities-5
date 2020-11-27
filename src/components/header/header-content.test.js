import React from "react";
import renderer from "react-test-renderer";
import HeaderContent from "./header-content";
import {adaptedLoginDataMock} from "../../store/test-data";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

it(`Render HeaderContent`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <HeaderContent
          authorizationStatus={AuthorizationStatus.AUTH}
          loginData={adaptedLoginDataMock}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
