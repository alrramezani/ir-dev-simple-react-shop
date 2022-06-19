import Header from "../header";
const MainLayout = ({ component }) => {
  return (
    <>
      <Header />
      {component}
    </>
  );
};
export default MainLayout;
