import Header from "../header";
const MainLayout = ({ component }) => {
  return (
    <>
      <Header />
      <div className="container">{component}</div>
    </>
  );
};
export default MainLayout;
