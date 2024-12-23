import { Button, Input } from "antd";
import React, { useRef } from "react";
import { useLoginApiMutation } from "../../redux/api/authorization-login";
import { data, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const refEmail = useRef();
  const refPassword = useRef();
  const [fetchLogin, {isLoading}] = useLoginApiMutation();
  
  const submit = async (e) => {
    e.preventDefault();
    const login_data = {
      email: refEmail.current.input.value,
      password: refPassword.current.input.value,
    };
    try {
      const response = await fetchLogin(login_data).unwrap();      
      localStorage.setItem("token",response.access_token);  
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-[100vh] flex items-center justify-center ">
      <div className="w-[400px]">
        <form
          onSubmit={submit}
          action=""
          className="flex items-center flex-col gap-3"
        >
          <Input className="h-[40px]" placeholder="Email..." ref={refEmail} />
          <Input.Password
            className="h-[40px]"
            placeholder="password..."
            ref={refPassword}
          />
          <button className="text-white w-[40%] bg-blue-600 h-[40px] rounded-md">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
