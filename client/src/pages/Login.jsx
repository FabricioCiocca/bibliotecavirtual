import "./Login.css"
import { useForm } from "react-hook-form"
import { authenticateUser } from "../api/credentialsusers.api";
import { useNavigate } from "react-router-dom";
import imgUser from "../assets/login/img_usuario.png"

export function LoginPage() {
    const { register, handleSubmit, formState:{
        errors }} = useForm();
    
        const onSubmit = handleSubmit(async data => {
           /* try {
                const response = await authenticateUser(data);

                if (response.data.authenticated) {
                    navigate("/typeusers");
                } else {
                    alert("Credenciales incorrectas");
                }
            } catch (error) {
                console.error("Error de autenticación", error);
            }*/
        })

    return (
        <div className="contenedor-main sombra">
            <div className="login">
                <h2>INICIAR SESIÓN</h2>
            </div>
            <div className="login">
                <img src={imgUser} alt="img-usuario" />
            </div>
            <div className="usuario-nuevo login">
                <p>¿Eres nuevo en este sitio? <a href="../TiposUsuarios/tipos_usuarios.html">Regístrate</a></p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="campo">
                    <label>Usuario:</label>
                    <input 
                        className="input-text" 
                        type="text" 
                        placeholder="Ingrese su Usuario" 
                        name="usuario" 
                        {...register("user", {required: true})} 
                    />
                    {errors.user && <span>Este campo es obligatorio</span>}
                </div>

                <div className="campo">
                    <label>Contraseña:</label>
                    <input 
                        className="input-text" 
                        type="password" 
                        placeholder="Ingrese su Contraseña" 
                        name="contrasena"
                        {...register("password", {required: true})} 
                    />
                    {errors.password && <span>Este campo es obligatorio</span>}
                </div>

                <div className="recup-contrasena login">
                    <p>
                        <a href="../TiposUsuarios/tipos_usuarios.html">¿Olvidaste la Contraseña?</a>
                    </p>
                </div>
                
                <div className="ingresar">
                    <input 
                        className="btn" 
                        type="submit" 
                        value="Ingresar" />
                </div>
            </form>
        </div>
    )
}