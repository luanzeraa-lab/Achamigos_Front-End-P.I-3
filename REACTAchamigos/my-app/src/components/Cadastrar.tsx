
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const Cadastrar =()=>{
    
    return (
        
        <div className='mt-4 d-flex justify-center'>
                <div className="text-center col-4">
                    <Form.Label htmlFor="login">Email ou CPF</Form.Label>
                    <Form.Control
                        type="text"
                        id="login"
                    />
                    <Form.Label htmlFor="senha">Senha</Form.Label>
                    <Form.Control
                        type="password"
                        id="senha"
                        aria-describedby="passwordHelpBlock"
                    />
                    <input className="border-2 rounded-full bg-[#ff8110] w-20 m-2" type="button" value="Cadastrar"
                    />
                

                </div>
                
            </div>

    )
}
export default Cadastrar;