import { useState } from "react";

const Login = () => {
  const [currentState, setCurretState] = useState("Sing up");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 mt-14 gap-4 text-gray-800 mx-auto"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          required
          type="text"
          placeholder="Name"
          className="w-full px-3 py-3 border border-gray-800"
        />
      )}

      <input
        required
        type="email"
        placeholder="Email"
        className="w-full px-3 py-3 border border-gray-800"
      />

      <input
        required
        type="password"
        placeholder="Password"
        className="w-full px-3 py-3 border border-gray-800"
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password ?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurretState("Sing Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p onClick={() => setCurretState("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sing In" : "Sing Up"}
      </button>
    </form>
  );
};

export default Login;
