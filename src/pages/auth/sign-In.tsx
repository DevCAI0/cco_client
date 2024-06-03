import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '@/api/sign-in';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInSchema = z.infer<typeof signInSchema>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
      password:searchParams.get('password') ?? '',
    },
  });

  const { mutate: authenticate } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      // Redirecionar para a página inicial após o login bem-sucedido
      window.location.href = '/'; // Redireciona para a página inicial
    },
    onError: () => {
      toast.error('Credenciais inválidas');
    },
  });

  async function handleAuthenticate({ email, password }: SignInSchema) {
    try {
      // Chama a função signIn para autenticar o usuário
      await authenticate({ email, password });
    } catch (err) {
      // Se houver um erro na autenticação, exibe o toast de erro
      toast.error('Credenciais inválidas');
    }
  }

  return (
    <div className="lg:p-8">
      <a
        href="/sign-up"
        className={twMerge(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8',
        )}
      >
        Novo estabelecimento
      </a>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(handleAuthenticate)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...register('email')}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Sua senha</Label>
                <Input
                  id="password"
                  type="password" 
                  {...register('password')} 
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Acessar painel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


