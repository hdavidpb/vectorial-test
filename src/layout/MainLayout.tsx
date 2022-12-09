import "../styles/styles.css";

interface Props {
  children: JSX.Element;
}

const MainLayout = ({ children }: Props) => {
  return <div className="main-layout-container ">{children}</div>;
};

export default MainLayout;
