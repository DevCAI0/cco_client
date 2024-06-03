import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { StoreProfileDiaolog } from "./store-profile.dialog";
import { signOut } from "@/api/sign-out";
import {  useNavigate } from "react-router-dom";

export const AccountMenu = () => {
  const navigate = useNavigate()
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime:Infinity,
  })
  const { isPending: isSigningOut, mutateAsync: signOutFn } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true });
    },
  });
  return (
    <Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 select-none">
            {isLoadingProfile ? <Skeleton className="h-4 w-4" /> : profile?.name}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 border bg-gray-200 dark:bg-stone-950 border-gray-600 p-1 mt-1 rounded">
          <DropdownMenuLabel className="flex flex-col border-b mb-1">
            {isLoadingProfile ? (
              <div>
                <Skeleton className="h-4 w-50 mb-1" />
                <Skeleton className="h-4 w-25 mb-1" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="mb-2 text-xs font-normal text-muted-foreground">{profile?.email}</span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
              <DropdownMenuItem className="flex items-center">
                <Building className="  mr-2 h-4 w-4" />
                <span>Perfil da loja</span>
              </DropdownMenuItem>
            </DialogTrigger>
          <DropdownMenuItem asChild className="flex items-center text-rose-500 dark:text-rose-400" disabled={isSigningOut}>
           <button onClick={() => signOutFn()}>
              <LogOut className="w-4 h-4 mr-1" />
              <span className="">Sair</span>
           </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      
        <StoreProfileDiaolog/>
    
      
    </Dialog>
  );
};
