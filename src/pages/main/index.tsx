import React from 'react';
import { ContainerLayout } from '../../layout';
import { SectionDescription } from './ui/SectionDescription';
import { SectionHomeRevolution } from './ui/SectionHomeRevolution';
import { CookieVideo } from './ui/video';
import { SectionStartBusiness } from './ui/StartBusiness';
import { SectionBecomePart, SectionLinkCookies } from './ui/LinkCookies';
import { SectionUniqueFlavors } from './ui/UniqueFlavors';
import {SectionHeaderMain} from "./ui/header";
import {SectionLogoPicheni} from "./ui/logoPicheni";

export const Main = () => {
  return (
    <>
      <SectionHeaderMain />

      <ContainerLayout>
        <SectionDescription />
      </ContainerLayout>

      <CookieVideo />

      <ContainerLayout>
        <SectionHomeRevolution />
        <SectionStartBusiness />
        <SectionLinkCookies />
        <SectionUniqueFlavors />
        <SectionBecomePart
          title="Become a part of Picheni!"
          text="Join our community and become part of the growing Picheni network. We have everything you
          need to run a successful craft cookie business."
          btnText="Learn more"
          isBecomePart
        />
        <SectionLogoPicheni />
      </ContainerLayout>
    </>
  );
};
