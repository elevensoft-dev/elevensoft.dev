import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro - Elevensoft",
  description: "Crie sua conta Elevensoft para começar sua jornada de Soberania Digital",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
