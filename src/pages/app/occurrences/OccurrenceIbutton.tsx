import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";


export function OccurrenceIbutton() {
    return (
        <div>
            <Textarea placeholder="Digite sua ocorrência de velocidade..." className="mb-4" />
            <div className="flex justify-center gap-4 mb-4">
                <Button>Processar informações</Button>
                <Button variant="secondary">Limpar Informações</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >MOTORISTA</TableHead >
                        <TableHead >MOTIVO</TableHead >
                        <TableHead >UNIDADE</TableHead >
                        <TableHead >QUANTIDADE DE OCORRÊNCIAS</TableHead >
                        <TableHead >VELOCIDADE MÁXIMA</TableHead >
                        <TableHead >DATA</TableHead >
                        <TableHead >ÚLTIMA OCORRÊNCIA</TableHead >
                        <TableHead >AÇÕES</TableHead >
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {/* Aqui você pode mapear os dados da sua ocorrência e renderizá-los na tabela */}
                    {Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <TableRow key={i}>
                                <TableCell >Motorista 1</TableCell >
                                <TableCell >Ibutton</TableCell >
                                <TableCell >Unidade 1</TableCell >
                                <TableCell >3</TableCell >
                                <TableCell >80 km/h</TableCell >
                                <TableCell >2024-04-12</TableCell >
                                <TableCell >2024-04-11</TableCell >
                                <TableCell >
                                    <Button variant="outline">Editar</Button>
                                    <Button variant="default" className="ml-2">Excluir</Button>
                                </TableCell >
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </div>
    );
};


