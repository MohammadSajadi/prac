import AdminRegister from "./components/AdminRegister";
import AdminSignin from "./components/AdminSignin";
import UserRegister from "./components/UserRegister";
import UserSignin from "./components/UserSignin";
import Location from "./components/Location";
import Bike from "./components/Bike";
import Reservation from "./components/Reservation";
import Return from "./components/Return";
import Report from "./components/Report";
import React from "react";

const App = () => {
  return (
    <div>

      <AdminRegister />
      <AdminSignin />
      <UserRegister />
      <UserSignin />
      <Location />
      <Bike />
      <Reservation />
      <Report />
      <Return />

    </div>
  );
};

export default App;
