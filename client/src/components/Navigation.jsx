import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div>
            <Link to='/typeusers'>
                <h1>Type User App</h1>
            </Link>
            <Link to='/typeusers-create'>
                <h1>Create Type User</h1>
            </Link>
        </div>
    )
}