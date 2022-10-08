import "./Auth.css";

// COMPONENTS
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// HOOKS
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { login, reset } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  //limpar todos os states após finalizar a requisição
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" value="Carregando..." disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
