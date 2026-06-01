import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  role: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Mínimo 2 caracteres')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  role: Yup.string()
    .required('Selecciona un rol'),
});

const RegisterForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      role: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Usuario registrado:', values);
      alert(`Usuario ${values.name} registrado correctamente`);
      resetForm();
    },
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-96">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Registro de usuario</h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Roman Torres"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="roman@empresa.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Rol</label>
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          >
            <option value="">Selecciona un rol...</option>
            <option value="frontend">Frontend Dev</option>
            <option value="backend">Backend Dev</option>
            <option value="designer">Scrum Master</option>
            <option value="designer">DevOps</option>
          </select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.role}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-gray-900 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Registrar usuario
        </button>

      </form>
    </div>
  );
};

export default RegisterForm;