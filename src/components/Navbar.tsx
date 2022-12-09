import { BiUserPlus } from "react-icons/bi";
import "./styles.css";
import { useDispatch } from "react-redux";
import { changeShowForm } from "../redux/features/comon/comonSlice";
import { signOut } from "../redux/features/login/loginSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navbar-container ">
      <h3>Vectorial</h3>
      <ul>
        <button onClick={() => dispatch(changeShowForm())}>
          <BiUserPlus size={20} />
          <span>Crear usuario</span>
        </button>

        <button className="btn-danger" onClick={() => dispatch(signOut())}>
          Cerrar sesion
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
