'use client'
import styles from './CadastroAnimais.module.css';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from "react";
import { IUser } from './IUser';

const CadastroUser = () => {
  

  const [nomeUser, setNomeUser] = useState<string>("");
  const [telefoneUser, setTelefoneUser] = useState<string>("");
  const [cnpjUser, setCnpjUser] = useState<string>("");
  const [userLogin, setUserLogin] = useState<string>("");
  const [senhaUser, setSenhaUser] = useState<string>("");
  const [emailUser, setEmailUser] = useState<string>("");
  const [enderecoUser, setEnderecoUser] = useState<string>("");
  const [tipoUser, setTipoUser] = useState<string>("");
  const [userStatus, setUserStatus] = useState<string>("");

  const createUser = async () => {
    const novoUser: IUser = {
      nome: nomeUser,
      telefone: telefoneUser,
      cnpj: cnpjUser,
      userLogin,
      senha: senhaUser,
      email: emailUser,
      endereco: enderecoUser,
      tipo: tipoUser,
      userStatus : userStatus
    };

    try {
      const res = await axios.post("http://localhost:3002/users", novoUser);
      if (res.status === 201) {
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert("Falha ao tentar cadastrar o usuário");
      }
    } catch {
      alert("Erro ao cadastrar o usuário");
    }
  };

  return (
    
          
          <>
            
          <Form>
            <div className={styles['input-wrapper']}>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome"
                value={nomeUser}
                onChange={(e) => setNomeUser(e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o telefone"
                value={telefoneUser}
                onChange={(e) => setTelefoneUser(e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o CNPJ"
                value={cnpjUser}
                onChange={(e) => setCnpjUser(e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o login"
                value={userLogin}
                onChange={(e) => setUserLogin(e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira a senha"
                value={senhaUser}
                onChange={(e) => setSenhaUser(e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o email"
                value={emailUser}
                onChange={(e) => setEmailUser(e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o Endereço"
                value={enderecoUser}
                onChange={(e) => setEnderecoUser (e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o tipo de usuário"
                value={tipoUser}
                onChange={(e) => setTipoUser (e.target.value)}
              />
            </div>

            <div className={styles['input-wrapper']}>
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={userStatus}
                onChange={(e) => setUserStatus(e.target.value)}
              />
            </div>
                        
                        <Button className={styles['btn-primary']} type="button"
                        onClick={()=>{
                            createUser();
                        }}>Finalizar cadastro</Button>
          </Form>
          </>
  )
};
export default CadastroUser;