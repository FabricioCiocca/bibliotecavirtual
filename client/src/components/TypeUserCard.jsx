import './Card.css'

export function TypeUserCard({typeUser}) {
    return (
        <div class="user-info-container">
            <h1>{typeUser.typeUser}</h1>
        </div>
    )
}