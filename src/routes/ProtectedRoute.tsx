import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { RootState } from "../redux/store";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const { logged } = useSelector((store: RootState) => store.loginReducer);

  useEffect(() => {
    if (logged === null) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [logged]);

  return children;
};

export default ProtectedRoute;
