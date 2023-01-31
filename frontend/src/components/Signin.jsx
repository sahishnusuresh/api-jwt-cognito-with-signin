import { useState } from "react";
import { Auth } from "aws-amplify";

export default function Login({ setScreen, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn=async()=>
    await Auth.federatedSignIn({
        provider:"Github"
    })
  
  const getUser = async () => {
    const user = await Auth.currentUserInfo();
    console.log(user);
    if (user) setUser(user);
    setloading(false);
  };

  

  const signOut = async () => await Auth.signOut();
  return (
    <div className="login">
      <input
        type="email"
        placeholder="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          Auth.signIn(email, password)
            .then((user) => setUser(user))
            .catch((e) => alert(e));
        }}
      >
        Login
      </button>
      <button onClick={signIn}>Login with github</button>
      <span onClick={() => setScreen("signup")}>
        Don't have an account? Sign up
      </span>
    </div>
  );
}