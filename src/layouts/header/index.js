import { HeaderContainer } from "./style";
import Catalog from "./components/catalog";
import Menu from "./components/menu";
import Search from "./components/search";
import Profile from "./components/profile";
import { useContext } from "react";
import mainContext from "contexts/main";

const Header = (props) => {
  const { userData } = useContext(mainContext);
  console.log(userData);
  return (
    <HeaderContainer>
      <div className="top">
        <div className="container">
          <div className="content">
            <div className="logo">
              <img src="./logo.png" alt="logo" />
            </div>
            <div className="menu">
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="content">
            <div className="catalog">
              <Catalog />
            </div>
            <div className="right">
              <div className="search">
                <Search />
              </div>
              <div className="profile">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
