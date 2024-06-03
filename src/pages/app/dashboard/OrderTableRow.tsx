import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableRow() {
  return (
    <TableRow> <TableCell className="font-medium">  </TableCell>
         <TableCell className="text-xl font-semibold"> Joao Silva Santos </TableCell>
         <TableCell className="text-muted-foreground">20 pontas</TableCell>
         <TableCell className="font-medium">
        86km
    </TableCell>
    </TableRow>
  )
}
