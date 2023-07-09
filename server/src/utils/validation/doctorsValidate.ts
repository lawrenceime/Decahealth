import  z  from 'zod';

export const registerSchema = z.object({
  firstName: z.string({
    required_error:"FirstName is Required"
  }),
  lastName:  z.string({
    required_error:"lastName is Required"
  }),
  email:  z.string({
    required_error:"email is Required"
  }),
  password:  z.string({
    required_error:"password is Required"
  }),
  qualification:  z.string({
    required_error:"qualification is Required"
  }),
  specialization:  z.string({
    required_error:"specialization is Required"
  }),
  hospital:  z.string({
    required_error:"hospital is Required"
  }),
  address:  z.string({
    required_error:"address is Required"
  }),
  phoneNumber:  z.number({
    required_error:"phoneNumber is Required"
  })
 
});

