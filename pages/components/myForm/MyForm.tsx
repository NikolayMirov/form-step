import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Step from "../step/Step";
import { IForm } from "./myForm.interface";
import styles from "./MyForm.module.scss";

const MyForm: FC = () => {
  const { register, handleSubmit, control } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.tariff}>
      <h1 className={styles.title}>Edit service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fields}>
          <label>Name</label>
          <input {...register("name")} type="text" />
        </div>
        <Controller
          control={control}
          name="parameters"
          render={() => <Step />}
        />

        <button>Submit form</button>
      </form>
    </div>
  );
};

export default MyForm;
