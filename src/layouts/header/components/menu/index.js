import {useState} from "react";
import {MenuContainer} from "./style";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiFillFire} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"

const Menu = () => {
    const [status, setStatus] = useState("v");
    return (
        <MenuContainer status={status} onClick={() => setStatus("h")}>
            <ul>
                <li><HiOutlineLocationMarker/>Dnepropetrovk, Ukraine<IoIosArrowDown/></li>
                <li>HOT<AiFillFire/></li>
                <li>Gift Cards</li>
                <li>Discount</li>
                <li>Reviews</li>
                <li>Contact</li>
                <li>095 444 44444</li>
                <li>ENG<IoIosArrowDown/></li>
            </ul>
        </MenuContainer>
    );
};
export default Menu;
