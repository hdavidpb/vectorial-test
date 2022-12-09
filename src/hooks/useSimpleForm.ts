import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  changeFormValues,
  createUser,
} from "../redux/features/users/usersSlice";
import { RootState } from "../redux/store";

const useSimpleForm = () => {
  const dispatch = useDispatch();
  const { formUserValues, users } = useSelector(
    (store: RootState) => store.userReducer
  );

  const handleChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    dispatch(changeFormValues({ name: e.target.name, value }));
  };

  const handleCreateUSer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidate()) return;
    dispatch(createUser(formUserValues));
    toast.success("Usuario creado con exito!");
  };

  const handleValidate = () => {
    const regex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let error = false;

    Object.values(formUserValues).forEach((value: any) => {
      if (!value.trim()) {
        error = true;
      }
    });
    if (!error) {
      if (!regex.test(formUserValues["email"])) {
        toast.error("Email no valido!");
        error = true;
      }
    }

    const user = users.find((user) => user.email === formUserValues["email"]);
    if (user !== undefined) {
      toast.error("Ya existe un usuario con esta dirección de email");
      error = true;
    }

    return error;
  };

  return { handleChangeFormValue, handleCreateUSer };
};

export default useSimpleForm;
