import { FaLock, FaUserCircle } from "react-icons/fa";
import CustomInput from "../../components/CustomInput";

import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { login } from "../../redux/features/login/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { user, password } = useSelector(
    (store: RootState) => store.loginReducer
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login());
  };
  return (
    <div className="login-container ">
      <form className="login-form-container" onSubmit={handleLogin}>
        <h1>Inicia sesión</h1>
        <div className="inputs-container">
          <CustomInput
            name="user"
            value={user}
            onChange={handleChange}
            type="text"
            placeholder="Usuario"
            Icon={FaUserCircle}
          />
          <CustomInput
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Contraseña"
            Icon={FaLock}
          />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
