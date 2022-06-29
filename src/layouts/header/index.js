import {HeaderContainer} from "./style";
import Catalog from "./components/catalog";
import Menu from "./components/menu";
import Search from "./components/search";
import Profile from "./components/profile";

const Header = (props) => {
    return (
        <HeaderContainer>
            {/*<div className="side">*/}
            {/*  <div className="logo">*/}
            {/*    <img src="./logo.png" alt="logo" />*/}
            {/*  </div>*/}
            {/*  <div className="catalog">*/}
            {/*    <Catalog />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="content">*/}
            {/*  <div className="top">*/}
            {/*    <Menu />*/}
            {/*  </div>*/}
            {/*  <div className="bottom">*/}
            {/*    <div className="right">search component</div>*/}
            {/*    <div className="left">icons component</div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className='top'>
                <div className="logo">
                    <img src="./logo.png" alt="logo"/>
                </div>
                <div className="menu">
                    <Menu/>
                </div>
            </div>
            <div className='bottom'>
                <div className="catalog">
                    <Catalog/>
                </div>
                <div className="right">
                   <div className="search">
                       <Search  />
                   </div>
                   <div className="profile">
                       <Profile  />
                   </div>
                </div>
            </div>
        </HeaderContainer>
    );
};
export default Header;
