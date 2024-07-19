import React from 'react';
import { ContainerLayout } from '../../layout';
import { SectionHeaderFranchising } from './ui/header';
import { SectionBecomePart } from '../main/ui/LinkCookies';
import { FranchisingInformation } from './ui/franchisingInformation';
import { MarketingPicheni } from './ui/marketingPicheni';
import { AdventureCookie } from './ui/adventureCookie';
import {SectionLogoPicheni} from "../main/ui/logoPicheni";

export const Franchising = () => {
  return (
    <ContainerLayout>
      <SectionHeaderFranchising />
      <SectionBecomePart
        title="Join the cookie revolution with a franchise Picheni"
        text='Picheni offers a unique opportunity to enter the growing biscuit industry with minimal investment and maximum support. Our franchise is ideal for entrepreneurs seeking social impact and sustainability."'
        btnText="Apply now"
        isBecomePart={false}
      />
      <FranchisingInformation />
      <MarketingPicheni />
      <AdventureCookie />
      <SectionLogoPicheni />
    </ContainerLayout>
  );
};
