import { useContext } from "react";
import mainContext from "contexts/main";
const Home = () => {
  const { setUser } = useContext(mainContext);
  return (
    <div
      onClick={() => {
        setUser({ firstName: "alireza" });
      }}
    >
      Click here
    </div>
  );
};
export default Home;
