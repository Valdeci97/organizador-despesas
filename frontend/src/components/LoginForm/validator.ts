import { z } from 'zod';

enum LoginErrors {
  email = 'Informe um e-mail válido!',
  password = 'Campo obrigatório!',
}

export const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: LoginErrors.email,
      required_error: LoginErrors.email,
    })
    .email({ message: LoginErrors.email }),
  password: z
    .string({
      invalid_type_error: LoginErrors.password,
      required_error: LoginErrors.password,
    })
    .min(1, { message: LoginErrors.password }),
});

export type Login = z.infer<typeof loginSchema>;
