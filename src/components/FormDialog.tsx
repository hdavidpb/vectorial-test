import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { AiOutlineUser } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import CustomInput from "./CustomInput";
import { RootState } from "../redux/store";
import { changeShowForm } from "../redux/features/comon/comonSlice";
import useSimpleForm from "../hooks/useSimpleForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormDialog = () => {
  const dispatch = useDispatch();
  const { formUserValues } = useSelector(
    (store: RootState) => store.userReducer
  );
  const { showForm } = useSelector((store: RootState) => store.comonReducer);
  const { handleChangeFormValue, handleCreateUSer } = useSimpleForm();
  const handleClose = () => {
    dispatch(changeShowForm());
  };

  return (
    <Dialog
      open={showForm}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <form className="create-user-form-container" onSubmit={handleCreateUSer}>
        <h1>Crear usuario</h1>
        <CustomInput
          value={formUserValues.name}
          name="name"
          type="text"
          placeholder="Nombre"
          onChange={handleChangeFormValue}
          Icon={AiOutlineUser}
        />
        <CustomInput
          value={formUserValues.lastName}
          name="lastName"
          type="text"
          placeholder="Apellido"
          onChange={handleChangeFormValue}
          Icon={AiOutlineUser}
        />
        <CustomInput
          value={formUserValues.company}
          name="company"
          type="text"
          placeholder="Empresa"
          onChange={handleChangeFormValue}
          Icon={BiBuildings}
        />
        <CustomInput
          value={formUserValues.email}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChangeFormValue}
          Icon={MdAlternateEmail}
        />
        <button type="submit">Crear</button>
      </form>
    </Dialog>
  );
};

export default FormDialog;
