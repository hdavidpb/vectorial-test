import { TableBody, TableRow, TableCell } from "@mui/material";

import { FiUserX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { adminDeleteUser } from "../redux/features/users/usersSlice";
import { RootState } from "../redux/store";

const TableList = () => {
  const dispacth = useDispatch();
  const { users } = useSelector((store: RootState) => store.userReducer);
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow
          key={user.email}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {user.name}
          </TableCell>
          <TableCell align="center">{user.lastName}</TableCell>
          <TableCell align="center">{user.company}</TableCell>
          <TableCell align="center">{user.email}</TableCell>
          <TableCell align="center">
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => dispacth(adminDeleteUser(user.email))}
            >
              <FiUserX color="#ffffff" size={20} />
            </button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableList;
