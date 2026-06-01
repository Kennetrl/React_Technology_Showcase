import { useForm } from "react-hook-form";

import "./App.css";

type FormData = {
  name: string;
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    alert(`
Nombre: ${data.name}
Email: ${data.email}
    `);

    reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>React Hook Form</h1>

        {/* Nombre */}
        <div className="field">
          <label>Nombre</label>

          <input
            type="text"
            placeholder="Tu nombre"
            {...register("name", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres",
              },
            })}
          />

          {errors.name && (
            <p className="error">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>

          <input
            type="email"
            placeholder="correo@email.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
          />

          {errors.email && (
            <p className="error">{errors.email.message}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;