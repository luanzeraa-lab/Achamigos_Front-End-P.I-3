import React, { useState } from "react";
import { ViaCep } from "./ViaCep";
import Form from 'react-bootstrap/Form';
import { IEndereco } from "@/app/CadastroUsuario/IEndereco";

function ConsultaCep() {
  const { data, loading, error, fetchCep } = ViaCep();
  

   const [cepUser, setCepUser] = useState<string>("");
  const [cidadeUser, setCidadeUser] = useState<string>("");
  const [ruaUser, setRuaUser] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={cepUser}
        onChange={(e) => setCepUser(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={() => fetchCep(cepUser)} disabled={loading}>
        {loading ? "Buscando..." : "Buscar CEP"}
      </button>

      {error && <p style={{ color: "red" }}>Erro ao buscar CEP.</p>}
      {data && (
        <div>

        <div>
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira a cidade"
            value={cidadeUser}
            onChange={(e) => setCidadeUser(e.target.value)}
          />
        </div>
        <div>
          <Form.Label>Rua</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o logradouro"
            value={ruaUser}
            onChange={(e) => setRuaUser(e.target.value)}
          />
        </div>
        </div>
      )}
    </div>
  );
}

export default ConsultaCep;
