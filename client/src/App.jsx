import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TypeUsersPage } from './pages/TypeUsersPage'
import { UsersPage } from './pages/UsersPage'
import { TypeUserFormPage } from './pages/TypeUserFormPage'
import { Navigation } from './components/Navigation'
import { LoginPage } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      {/*<Navigation />*/}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/typeusers" element={<TypeUsersPage />} />
        <Route path="/typeusers-create" element={<TypeUserFormPage />} />

        <Route path="/users" element={<UsersPage />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App