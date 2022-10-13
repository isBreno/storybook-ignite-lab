import { Envelope, LockKey, Check } from "phosphor-react";
import { TextInput } from "../Input/Input";
import * as Checkbox from "@radix-ui/react-checkbox";
import Button from "../Button/Button";
import { FormEvent } from "react";

const Form = () => {
  function handlePostMethod(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <form
      className="flex flex-col gap-5 mt-8 items-center"
      onSubmit={handlePostMethod}
    >
      <TextInput.Root>
      <TextInput.Label label="Endereço de e-mail" />
        <TextInput.Content>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input
            placeholder="johndoe@gmail.com"
            name="email"
            type={"email"}
          />
        </TextInput.Content>
      </TextInput.Root>

      <TextInput.Root>
        <TextInput.Label label="Sua senha" />
        <TextInput.Content>
          <TextInput.Icon>
            <LockKey />
          </TextInput.Icon>
          <TextInput.Input
            placeholder="**********"
            name="password"
            type={"password"}
          />
        </TextInput.Content>
      </TextInput.Root>

      <label className="flex gap-2 items-center mr-auto">
        <Checkbox.Root
          className="w-6 h-6 p-1 rounded bg-gray-800"
          id="checkbox"
          aria-label="30 days login"
        >
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-sky-500" weight="bold" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-sm text-gray-900 font-bold">
          Lembrar minha senha
        </span>
      </label>

      <Button text="Entrar" id="join" aria-label="login" />

      <div className="flex flex-col items-center gap-3">
        <a href="#" className="font-bold text-sm text-gray-900">
          Esqueceu sua senha?
        </a>
        <a href="#" className="font-bold text-sm text-gray-900">
          Não possui uma conta? Crie uma agora!
        </a>
      </div>
    </form>
  );
};

export default Form;
