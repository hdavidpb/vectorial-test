import MainLayout from "./layout/MainLayout";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Toaster } from "react-hot-toast";
function App() {
  const { logged } = useSelector((store: RootState) => store.loginReducer);
  return (
    <MainLayout>
      <>
        {logged && <Navbar />}

        <hr />
        <MainRoutes />
        <Toaster />
      </>
    </MainLayout>
  );
}

export default App;
