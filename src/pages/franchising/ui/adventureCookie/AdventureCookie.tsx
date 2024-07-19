import React from 'react';
import { Adventure } from '../../../../shared';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Checkbox, CustomButton, CustomInput } from '../../../../shared';

const schema = yup.object({
  name: yup.string().required('The field must be filled'),
  phone: yup.string().required('The field must be filled'),
  email: yup.string().required('The field must be filled'),
  country: yup.string().required('The field must be filled'),
  confidentiality: yup.boolean().required('The field must be filled'),
});

type IAdventure = yup.InferType<typeof schema>;

export const AdventureCookie = () => {
  const form = useForm<IAdventure>({
    // defaultValues: {
    //   name: '',
    //   phone: '',
    // },
    resolver: yupResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (form: IAdventure) => {
    console.log(form);
  };

  return (
    <div className="border-t-[0.07vw] border-white border-[100%] pt-[5.2vw] mb-[12.5vw] flex justify-between items-center">
      <Adventure />
      <div className="w-[38.88vw] max-md:w-full">
        <h3 className="text-[3.61vw] leading-[4.51vw] mb-[3vw] text-[#fff] max-md:text-[9vw] max-md:leading-[10.93vw]">
          Ready to start your cookie adventure?
        </h3>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  {...field}
                  name="name"
                  placeholder="Name"
                  type="text"
                  id="name"
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  name="phone"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  errorText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  name="email"
                  placeholder="Email"
                  type="email"
                  id="email"
                  errorText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  name="country"
                  placeholder="Country and city of opening"
                  type="text"
                  id="country"
                  errorText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="confidentiality"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  checked={field.value}
                  id="confidentiality"
                  name="confidentiality"
                />
              )}
            />
            <CustomButton
              className="bg-[#53CFBA] text-[#003C46] border border-[#53CFBA] hover:border-[#fff] hover:bg-[#003C46] hover:text-[#fff] mt-[2.2vw] w-[7.70vw] block
              max-md:mb-[14.93vw] max-md:mt-[8.5vw] max-md:max-w-[100vw] max-md:w-full max-md:pt-[3.46vw] max-md:pb-[4.5vw] max-md:text-[4.8vw] max-md:leading-[5.6vw] max-md:rounded-[29.6vw]
              "
              type="submit"
            >
              Submit
            </CustomButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
