"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Schéma de validation avec Yup
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Champ requis"),
  lastName: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Champ requis"),
  email: Yup.string().email("Email invalide").required("Champ requis"),
  address: Yup.string().required("Champ requis"),
  city: Yup.string().required("Champ requis"),
  zip: Yup.string()
    .matches(/^[0-9]{5}$/, "Code postal invalide")
    .required("Champ requis"),
});

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Inscription</h1>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            city: "",
            zip: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form Data:", values);
            setFormSubmitted(true);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 w-full max-w-md">
              <div>
                <label htmlFor="firstName">Prénom</label>
                <Field
                  name="firstName"
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Votre prénom"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName">Nom</label>
                <Field
                  name="lastName"
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Votre nom"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="border p-2 rounded w-full"
                  placeholder="Votre email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="address">Adresse</label>
                <Field
                  name="address"
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Votre adresse"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="city">Ville</label>
                <Field
                  name="city"
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Votre ville"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="zip">Code Postal</label>
                <Field
                  name="zip"
                  type="text"
                  className="border p-2 rounded w-full"
                  placeholder="Votre code postal"
                />
                <ErrorMessage
                  name="zip"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 px-4 sm:px-5 rounded"
              >
                Soumettre
              </button>
            </Form>
          )}
        </Formik>

        {formSubmitted && (
          <p className="text-green-500 mt-4">
            Formulaire soumis avec succès!
          </p>
        )}
      </main>
    </div>
  );
}