import { useContext, useState } from "react"
import { NotesContext } from "../Context/NotesContext"

export const NotesForm = () =>{

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const {addNotes} = useContext(NotesContext)

    const checkContent = ({title, description})=>{
        console.log(title)
        console.log(description)
        if(title === '' && description === ''){
            return
        }else if(title === ''){
            console.log('estoy en el else if')
            return {title: 'Sin titulo', description} 
        }
        return {title, description}
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        addNotes(
            checkContent({title, description})
        )
        setTitle("");
        setDescription("");
    }
    return(
        <form onSubmit={onSubmit} className="notesForm" style={{ 
            backgroundColor: '#F5F5F5', 
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '20px auto'
        }}>
            <input 
                placeholder="Pon un titulo"
                onChange={(e)=>{setTitle(e.target.value)}}
                value= {title}
                className="appInput"
                style={{ 
                    display: 'block',
                    width: '100%',
                    margin: '20px 0',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid #CCC',
                    fontSize: '18px'
                }}
            />
            <textarea 
                placeholder = "aqui van las notitass (っ ◕‿◕ )っ uwu"
                onChange={(e)=>{setDescription(e.target.value)}}
                value = {description}
                className="appText"
                style={{ 
                    display: 'block',
                    width: '100%',
                    margin: '20px 0',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid #CCC',
                    minHeight: '200px',
                    fontSize: '16px'
                }}
            ></textarea>
            {
                title === '' && description === '' && (
                    <div style={{
                        color: 'red',
                        fontSize: '14px',
                        marginBottom: '10px'
                    }}>
                         Pofavor pon algo si no no se guarda mi rey
                    </div>
                )
            }
            <button className="submitButton" style={{ 
                backgroundColor: '#333', 
                color: '#F5F5F5', 
                padding: '15px 30px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                display: 'block',
                width: '100%',
                marginTop: '20px',
                transition: 'background-color 0.3s ease',
                fontSize: '18px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
            >Enviar</button>
        </form>
    )
}