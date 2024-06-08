import { NotesList } from "./NotesList"

export function SideBar(){
    return (
        <div className='sidebar' style={{
            backgroundColor: '#F5F5F5',
            padding: '20px',
            height: '70vh',
            boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)',
            overflowY: 'auto'
        }}>
            <NotesList/>
        </div>
    )
}