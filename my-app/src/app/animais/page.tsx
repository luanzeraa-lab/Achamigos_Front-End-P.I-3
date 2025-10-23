'use client';

import Image from 'next/image';

import styles from './Animais.module.scss';
import { Container } from 'react-bootstrap';
import Nav2 from '@/components/Navbar';
import { Button } from '../../components/Button';
import Footer from '@/components/Footer';
import axios from 'axios';
import { IAnimal } from './IAnimal';
import { useEffect, useState } from 'react';

const Catalogo = () => {
  const [animal, setAnimal] = useState<IAnimal[]>([]);

  // COMENTADO PARA NAO DAR ERRO NA HORA DE FAZER O FRONT, SO TIRAR O COMENTARIO DEPOIS
  // useEffect(() => {
  //   const listaAnimal = async () => {
  //     const response = await axios.get('http://localhost:3002/cadastroanimal');

  //     setAnimal(response.data);
  //     console.log(response.data);
  //   };
  //   listaAnimal();
  // }, []);

  return (
    <>
      <Container fluid className={styles['gridcate']}>
        <div className={styles['Navc']}>
          <Nav2 />{' '}
        </div>

        <div className={styles['apresentacao']}>
          <h1 className="text-4xl">
            Encontre o seu novo melhor amigo!
          </h1>
          <h5>
            Esses são os amigos que estão esperando por um lar cheio de
            amor e carinho &hearts;
          </h5>
        </div>

        <div className={styles['asfiltro']}>
          <h2>Filtro</h2>
          <div className={styles['flex-col']}>
            <h2>Animais</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Gato</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Cachorro</label>
              </li>

              <li>
                {' '}
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Outros</label>
              </li>
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Porte</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">P</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">M</label>
              </li>

              <li>
                {' '}
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">G</label>
              </li>
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Cidade</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Sorocaba</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Votorantim</label>
              </li>

              <li>
                {' '}
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Outras</label>
              </li>
            </ul>
          </div>

          <div className={styles['flex-col']}>
            <h2>Idade</h2>
            <ul>
              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">0-10 anos</label>
              </li>

              <li>
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">10 anos+</label>
              </li>
            </ul>

          <Button
            title="Filtrar"
            className='w-full'
          />
            
          </div>
        </div>

        <div className={styles['descricaoani']}>
          {animal.map((ani) => {
            return (
              <figure className={styles['figures']} key={ani._id}>
                <img
                  className="w-50 h-auto"
                  src={`http://localhost:3002${ani.imagem}`}
                  alt="imagem"
                />
                <figcaption>
                  <p>
                    <span className="font-bold">Nome:</span> {ani.nome}
                  </p>
                  <p>
                    <span className="font-bold">Idade:</span> {ani.idade}
                  </p>
                  <p>
                    <span className="font-bold">Raça:</span> {ani.raca}
                  </p>
                  <p>
                    <span className="font-bold">Sexo:</span> {ani.sexo}
                  </p>
                  <p>
                    <span className="font-bold">Porte:</span> {ani.porte}
                  </p>
                  <p>
                    <span className="font-bold">Peso:</span> {ani.peso}
                  </p>
                  <p>
                    <span className="font-bold">Animal castrado?:</span>{' '}
                    {ani.castracao ? 'Sim' : 'Não'}
                  </p>
                  <p>
                    <span className="font-bold">Observações:</span>{' '}
                    {ani.observacoes}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className={styles['footercat']}>
          {' '}
          <Footer />{' '}
        </div>
      </Container>
    </>
  );
};

export default Catalogo;
