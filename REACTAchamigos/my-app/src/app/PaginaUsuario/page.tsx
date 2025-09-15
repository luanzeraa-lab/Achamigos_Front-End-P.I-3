'use client'

import { useRouter } from "next/navigation";


const PaginaUsuario =()=>{

    const router = useRouter();

    return(
        <>
            <input type="button" value={"Gerenciar Perfil"} onClick={()=>{router.push('/CadastroAnimais')}} />
            <input type="button" value={"Cadastro de animais"} onClick={()=>{router.push('/CadastroAnimais')}} />
            <input type="button" value={"Cadastro de eventos"} onClick={()=>{router.push('/CadastroEvento')}} />
        </>
    )
}
export default PaginaUsuario;