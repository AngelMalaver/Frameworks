export function NavBar(){
    return (
    <div className='navBar' style={{ 
        backgroundColor: '#F5F5F5', 
        padding: '10px 20px',
        borderBottom: '1px solid #CCC'
    }}>

        <div className='loginLogo' style={{ 
            marginRight: '20px'
        }}>
            <img src="/accountLogo.svg" alt="" style={{ 
                width: '50px',
                height: '50px'
            }}/>
        </div>
        
        <section className="infoText" style={{ 
            color: '#333'
        }}>

            <label style={{ 
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold'
            }}>Proyecto #1, Bloc de Notas (FRAMEWORKS) </label>
            <label>Angel Malaver, Smasher fan de Victoria</label>
        </section>
    </div>
    )
}