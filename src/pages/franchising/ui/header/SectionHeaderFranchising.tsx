import React, { useState } from 'react';
import {HeaderNavigation, HeaderNavigationMenu} from "../../../main/ui/header";

export const SectionHeaderFranchising = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="w-full mb-[8.6vw]">
      {menuActive ? (
        <HeaderNavigationMenu setMenuActive={setMenuActive} />
      ) : (
        <HeaderNavigation isMainPage={false} setMenuActive={setMenuActive} />
      )}
    </div>
  );
};
