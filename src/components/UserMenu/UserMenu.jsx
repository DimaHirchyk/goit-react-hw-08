import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selector";
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handlLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handlLogOut}>
        Logout
      </button>
    </div>
  );
};
