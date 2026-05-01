'use client';

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import { useForm } from 'react-hook-form';
import { BsGoogle, BsGooglePlay } from 'react-icons/bs';
import { CgGoogle } from 'react-icons/cg';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,

      callbackURL: '/',
    });

    console.log('data', data, 'res', res, 'error', error);
  };

  const handlegooglesignin =async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  };

  return (
    <div className="my-10 flex flex-col justify-center items-center ">
      <div className="shadow-2xl rounded-2xl">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-96 flex-col gap-4  p-6 "
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input {...register('email')} placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={value => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              {...register('password')}
              placeholder="Enter your password"
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Login
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex justify-center ">
          <Button
            className="bg-green-500 font-bold mb-4"
            onClick={handlegooglesignin}
          >
            <BsGoogle></BsGoogle>login with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
