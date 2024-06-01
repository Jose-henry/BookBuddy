import { z } from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z.string().min(3, {message: 'MINIMUM 3 CHARACTERS'}).max(30),
  username: z.string()
    .min(3, {message: 'MINIMUM 3 CHARACTERS'})
    .max(30)
    .refine(value => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value), 'Must start with a letter or underscore and contain only alphanumeric characters and underscores'),
  bio: z.string().min(3).max(1000),
});
