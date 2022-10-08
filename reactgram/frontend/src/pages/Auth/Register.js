import "./Auth.css";

// COMPONENTS
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// HOOKS
import { useState, useEffect } from "react";

// REDUX
import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // usado para executar as funções do slice
  const dispatch = useDispatch();

  // pega todos os states do slice de auth
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user));
  };

  // Antes de qualquer requisição executar o reset para limpar os states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name || ""}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email || ""}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password || ""}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          value={confirmPassword || ""}
          placeholder="Confirme a Senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Carregando..." disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  );
};

export default Register;
