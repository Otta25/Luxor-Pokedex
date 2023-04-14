import { motion } from "framer-motion";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  document.title ='Login | Pokedex'
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongMessage, setWrongMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin" && password === "admin") {
      navigate("/home");
    } else {
      setWrongMessage(true);
    }
  };

  return (
    <div className=" bg-[#1C1D1F] w-[100vw] h-[100vh] flex items-center justify-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{
          y: -100,
        }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-[508px] bg-[#2D2F36] flex flex-col items-center justify-center py-[4rem] px-[2rem] gap-5 rounded-md"
        action=""
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[90%] p-3 bg-[#3F414B] text-[white] text-lg rounded-md focus:outline-none focus:border focus:border-[#F2C94C] placeholder:opacity-30"
          type="text"
          placeholder="admin"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[90%] p-3 bg-[#3F414B] text-[white] text-lg rounded-md focus:outline-none focus:border focus:border-[#F2C94C] placeholder:opacity-30"
          type="password"
          placeholder="admin"
        />
        {wrongMessage && (
          <motion.h2 
          className="text-[#F2C94C] font-semibold"
          initial={{
            x: -30,
          }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          >
            Wrong credentials , try again
          </motion.h2>
        )}
        <button
          className="w-[90%] p-3 mt-3 bg-[#F2C94C] text-[white] rounded-md  font-semibold text-lg"
          type="submit"
        >
          LOGIN
        </button>
      </motion.form>
    </div>
  );
}

export default Login;
