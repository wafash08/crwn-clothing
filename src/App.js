import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { UserContext } from "./contexts/user.context";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path='auth'
          element={
            currentUser ? <Navigate to='/' replace /> : <Authentication />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
