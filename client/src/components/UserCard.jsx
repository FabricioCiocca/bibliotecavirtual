import './Card.css'

export function UserCard({ User }) {
    return (
        <div class="user-info-container">
            <h1>{User.name}</h1>
            <h1>{User.lastName}</h1>
            <h1>{User.institution}</h1>
            <h1>{User.codeInstitutional}</h1>
            <h1>{User.phoneNumber}</h1>
        </div>
    )
}
