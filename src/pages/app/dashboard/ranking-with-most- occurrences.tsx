import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { OrderTableRow } from "./OrderTableRow"

export function RankingWithMostOccurrences() {
    return (
       
            
            
                   

                    <div className=" border rounded-md col-span-6">
                        <Table>
                            <TableHeader className="bg-slate-300 dark:bg-slate-900">
                                <TableRow>
                                    <TableHead className="w-[64px]"></TableHead>
                                    <TableHead className="w-[350px]">Motorista</TableHead>
                                    <TableHead className="w-[180px]">Quantidande</TableHead>
                                    <TableHead className="w-[140px]">Maxima</TableHead>
                                    <TableHead className="w-[60px]"></TableHead>
                                    <TableHead className="w-[60px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {Array.from({ length: 8 }).map((_, i) => {
                                    return (
                                        <OrderTableRow key={i} />
                                    )
                                })}

                            </TableBody>

                        </Table>
                    </div>
                   
              
       
    )
}
