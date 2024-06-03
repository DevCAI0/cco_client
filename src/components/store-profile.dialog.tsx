import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { updateProfile } from '@/api/update-profile';

import { Button } from './ui/button';
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { GetProfileResponse, getProfile } from '@/api/get-profile';
import { DialogDescription } from '@radix-ui/react-dialog';

const storeProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDiaolog() {
  const queryClient = useQueryClient();

  const { data: storeProfile, isLoading: isLoadingStoreProfile } = useQuery({
    queryKey: ['client-profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
  });

  // Atualize os valores do formulário quando o perfil da loja for carregado
  useEffect(() => {
    if (storeProfile) {
      setValue('name', storeProfile.name ?? ''); // Use o operador de coalescência nula para lidar com valores nulos
      setValue('email', storeProfile.email ?? '');
      setValue('phone', storeProfile.phone ?? '');
    }
  }, [storeProfile, setValue]);

  const updateProfileDataOnCache = ({ name, email, phone }: StoreProfileSchema) => {
    const cached = queryClient.getQueryData<GetProfileResponse>(['client-profile']);

    if (cached) {
      queryClient.setQueryData<GetProfileResponse>(['client-profile'], {
        ...cached,
        name,
        email,
        phone,
      });
    }

    return { cached };
  };

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate: ({ name, email, phone }) => {
      const { cached } = updateProfileDataOnCache({
        name,
        email,
        phone,
      });

      return { previousProfile: cached };
    },
    onError: (_, __, context) => {
      if (context?.previousProfile) {
        updateProfileDataOnCache(context.previousProfile);
      }
    },
  });

  const handleUpdateProfile = async ({
    name,
    email,
    phone,
  }: StoreProfileSchema) => {
    try {
      const profileData = {
        id: storeProfile?.id ?? '',
        name,
        email,
        phone,
        address: '',
        password: '',
        confirmPassword: '',
      };

      await updateProfileFn(profileData);
      toast.success('Perfil atualizado com sucesso!');
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente!');
    }
  };

  return (
    <DialogContent className="sm:max-w-[520px]">
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis aos seus
          clientes.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              className="col-span-3"
              disabled={isLoadingStoreProfile}
              {...register('name')}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              disabled={isLoadingStoreProfile}
              {...register('email')}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Telefone
            </Label>
            <Input
              id="phone"
              className="col-span-3"
              disabled={isLoadingStoreProfile}
              {...register('phone')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="default"
            disabled={isLoadingStoreProfile || isSubmitting}
          >
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
