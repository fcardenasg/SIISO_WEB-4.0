import * as Yup from 'yup';
import { LoginForm } from '../../../types/LoginForm';

const schemaValidationLogin: Yup.SchemaOf<LoginForm> = Yup.object().shape({
  user: Yup.string().required('El usuario es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

export default schemaValidationLogin;