import { useForm } from "react-hook-form"
import { createTypeUser } from "../api/typeusers.api";
import { useNavigate } from "react-router-dom";

export function TypeUserFormPage() {
    const { register, handleSubmit, formState:{
    errors }} = useForm();

    const onSubmit = handleSubmit(async data => {
        await createTypeUser(data);
        navigate("/typeusers");
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Tipo de Usuario" 
                    {...register("typeuser", {required: true})}
                />
                {errors.typeuser && <span>This field is required</span>}
                <button>Save</button>
            </form>
        </div>
    )
}