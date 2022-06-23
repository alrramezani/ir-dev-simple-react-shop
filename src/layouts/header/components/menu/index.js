import { useState } from "react";
import { MenuContainer } from "./style";
const Menu = () => {
  const [status, setStatus] = useState("v");
  return (
    <MenuContainer status={status} onClick={() => setStatus("h")}>
      <ul > 
        <li>item1</li>
        <li>item2</li>
      </ul>
    </MenuContainer>
  );
};
export default Menu;
