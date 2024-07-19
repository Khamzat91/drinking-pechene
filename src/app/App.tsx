import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Franchising, Main } from '../pages';
import { SectionCart } from '../pages/cart/ui';
import {SectionCartBuild} from "../pages/cart/ui/cartBuild";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/franchising" element={<Franchising />} />
          <Route path="/cart">
              <Route index element={<SectionCart />}/>  {/* самая главная корзина */}
              <Route  path="/cart/build" element={<SectionCartBuild />}/> {/*сборка коробки печеньев */}
              <Route  path="/cart/form" element={<SectionCart />}/> {/*форма обратной связи для заказа*/}
              <Route  path="/cart/finish" element={<SectionCart />}/> {/*после формы заказа, об успешном выполнении заказа*/}

          </Route>
      </Routes>
    </div>
  );
}
