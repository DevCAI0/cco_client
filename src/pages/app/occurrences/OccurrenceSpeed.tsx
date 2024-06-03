import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { OcorrenceTableRow } from "./OcorrenceTableRow";
import { useGetAllOccurrences } from "@/api/get-all-occurrences";
import { processarOcorrencias } from "@/api/post-all-occurrences";
import { toast } from "sonner";

export function OccurrenceSpeed() {
    const { data: occurrences, refetch } = useQuery({
        queryKey: ['occurrences'],
        queryFn: useGetAllOccurrences
    });
    const [information, setInformation] = useState('');
    const [_, setErrorMessage] = useState('');

    const handleProcessInformation = async () => {
        try {
            const { success, message } = await processarOcorrencias(information, refetch, setInformation, setErrorMessage);
            if (success) {
                toast.success("Ocorrência processada com sucesso!");
            } else {
                toast.error("Erro ao processar ocorrência: " + message);
            }
        } catch (error) {
            console.error('Erro ao processar informações:', error);
            toast.error('Erro ao processar informações');
        }
    };

    const handleClearInformation = () => {
        // Limpar as informaçõeswdf
        setInformation('');
    };

    return (
        <div>
            <Textarea placeholder="Digite sua ocorrência de velocidade..." className="mb-4" value={information} onChange={(e) => setInformation(e.target.value)} />
            <div className="flex justify-center gap-4 mb-4">
                <Button disabled={!information} onClick={handleProcessInformation}>Processar informações</Button>
                <Button variant="secondary" onClick={handleClearInformation}>Limpar Informações</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[250px]">MOTORISTA</TableHead >
                        <TableHead className="w-[80px]">MOTIVO</TableHead >
                        <TableHead className="w-[80px]">UNIDADE</TableHead >
                        <TableHead className="w-[30px]">QUANTIDADE DE OCORRÊNCIAS</TableHead >
                        <TableHead className="w-[30px]">VELOCIDADE MÁXIMA</TableHead >
                        <TableHead className="w-[80px]">DATA</TableHead >
                        <TableHead className="w-[80px]">ÚLTIMA OCORRÊNCIA</TableHead >
                        <TableHead className="w-[80px]">CONTATO</TableHead >
                        <TableHead className="w-[80px]">AÇÕES</TableHead >
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {occurrences && occurrences.informacoes.map(occurrence => {
                        return <OcorrenceTableRow key={occurrence.ID} informacoes={occurrence} />
                    })}
                </TableBody>
            </Table>
        </div>
    );
};
