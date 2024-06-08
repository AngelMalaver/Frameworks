/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { usuarios } from "../Data/usersData"
import { useState } from "react"

export function LogIn ({loginSucces}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleClick = (e)=>{
        e.preventDefault()

        const loginSecurity = (username, password)=>{
            console.log(`user encontrado: ${username}`);
            console.log(`password encontrada: ${password}`)
            const foundUser = username === usuarios.find(user => user.user === username).user
            const foundPwd = password === usuarios.find(user => user.password === password).password
            console.log(usuarios.find(user => user.user))
            console.log(usuarios.find(user => user.password))
            console.log(`encontro el user? ${foundUser}`)
            console.log(`encontro la password? ${foundPwd}`)
                if( !(foundUser) && !(foundPwd)){
                    setError('Usuario y password invalidas')
                    // alert('No');
                    return false
                }else if(!foundUser){
                    setError('Usuario invalido')
                    // alert('No');
                    return false
                }else if(!foundPwd){
                    setError('Password invalida')
                    // alert('No');
                    return false
                }else{
                    // alert('Si');
                    return true
                }
            }
        
            const isValid = loginSecurity(username, password)
            if(isValid){
                console.log(`logro iniciar sesion? ${isValid}`);
                loginSucces();
                
            }
            console.log(`logro iniciar sesion? ${isValid}`);
    }

    return (
        <div className="logIn" style={{ 
            backgroundColor: '#F5F5F5', 
            color: '#333', 
            fontFamily: 'Arial, sans-serif', 
            border: 'solid 2px #CCC',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '0 auto'
        }}>
            <form onSubmit={handleClick}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Meta los datos de la cuenta jijiji uwu (っ ◕‿◕ )っ </h2>
                <input type="text" 
                name="username" 
                required 
                placeholder="Nombre de Discord"
                onChange={(e)=>setUsername(e.target.value)}
                style={{ 
                    display: 'block',
                    width: '100%',
                    margin: '10px 0',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #CCC'
                }}
                />

                <input type="password" 
                name="pwd" 
                required 
                placeholder="Palabrita Secreta jijiji"
                onChange={(e)=>setPassword(e.target.value)}
                style={{ 
                    display: 'block',
                    width: '100%',
                    margin: '10px 0',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #CCC'
                }}
                />
                <button className="loginButton" style={{ 
                    backgroundColor: '#333', 
                    color: '#F5F5F5', 
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'block',
                    width: '100%',
                    marginTop: '20px'
                }}>Iniciar Sesion</button>
            </form>
        </div>

    )
}