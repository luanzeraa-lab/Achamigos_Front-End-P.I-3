'use client';
import styles from './CadastroAnimais.module.scss';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '../../components/Button';
import * as Yup from 'yup';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const validation = Yup.object({
    emailcpf: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const router = useRouter();

  return (
    <>
      <Nav2 />
      <main className="flex flex-col bg-[#fffffe]">
        <Formik
          initialValues={{ emailcpf: '', password: '' }}
          validationSchema={validation}
          onSubmit={(valores) => {
            console.log(valores.emailcpf);
            console.log(valores.password);
            router.push('/PaginaUsuario');
          }}
        >
          <Form>
            <div className="mt-4 d-flex justify-center">
              <div className=" flex flex-col text-start col-4">
                <p className=" self-center font-bold text-[1.5rem]">Login</p>

                <label htmlFor="emailcpf" className="font-[700] mb-1">
                  Email ou CPF
                </label>
                <Field
                  type="text"
                  name="emailcpf"
                  className="form-control"
                  id="emailcpf"
                />
                <ErrorMessage name="emailcpf" component="div" />

                <label htmlFor="password" className="mt-4 mb-1 font-[700] ">
                  Senha
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                />
                <ErrorMessage name="password" component="div" />

                <Button type="submit" title="Entrar" />

                <Button
                  title="Fazer cadastro"
                  onClick={() => {
                    router.push('/CadastroUsuario');
                  }}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </main>
      <Footer />
    </>
  );
};
export default Login;
