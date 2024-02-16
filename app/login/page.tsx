"use client";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center bg-slate-500 p-20 mx-[5vh] my-[10vh] h-[80vh] rounded-lg">
      <div className="flex-auto flex-col">
        <div className="flex-auto m-5">
          <h1 className="text-5xl">Welcome to NoobNest</h1>
        </div>
        <div className="flex-auto m-5">
          <p>A place for beginners to learn and grow</p>
        </div>
      </div>
      <div className="flex-auto bg-red-500 p-10 rounded-lg">
        <div>
          <h2>Log in</h2>
        </div>
        <div>
          <form>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
