import 'bootstrap/dist/css/bootstrap.min.css';

import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Logar =()=>{

    const validation = Yup.object({
        emailcpf: Yup.string().required("Campo obrigatório"),
        password: Yup.string().required("Campo obrigatório"),
    })

    const router = useRouter();

    return (
        <>
            <Formik
                initialValues={{emailcpf:"", password:""}}
                validationSchema={validation}
                onSubmit={(valores)=>{
                    console.log(valores.emailcpf);
                    console.log(valores.password);
                    router.push("/CadastroAnimais")
                }}>
                <Form>
                    <div className='mt-4 d-flex justify-center'>
                        <div className="text-center col-4">
                            <p className='font-bold text-2xl'>Login</p>
                            
                            <label htmlFor="emailcpf">Email ou CPF</label>
                            <Field
                            type="text"
                            name="emailcpf"
                            className="form-control"
                            id="emailcpf"
                             />
                             <ErrorMessage name='emailcpf' component="div"/>
                            
                             <label htmlFor="password" className="mt-2">Senha</label>
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                        />
                        <ErrorMessage name="password" component="div" />
                           
                           <button className="border-2 rounded-full bg-[#ff8110] w-20 mt-2" type="submit">Entrar</button>
                            
                        </div>
                    </div>
                </Form>    
            </Formik>                
        </>
    )
}

export default Logar;