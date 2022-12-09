import { useSelector, useDispatch } from "react-redux";
import FormDialog from "../../components/FormDialog";
import TableComponent from "../../components/Table";
import { changeShowForm } from "../../redux/features/comon/comonSlice";
import { RootState } from "../../redux/store";
import "./styles.css";

const Admin = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store: RootState) => store.userReducer);

  return (
    <div className="admin-container">
      <FormDialog />
      <h1>Listado de usuarios</h1>
      {!users.length ? (
        <div className="empty-users">
          <h5>Aún no has creado ningún usuario </h5>
          <h5 className="create" onClick={() => dispatch(changeShowForm())}>
            crear.
          </h5>
        </div>
      ) : (
        <TableComponent />
      )}
    </div>
  );
};

export default Admin;
