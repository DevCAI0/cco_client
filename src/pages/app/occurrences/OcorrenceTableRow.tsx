

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

export interface OcorrenceTableRowProps {
    informacoes: {
        ID: number;
        MOTORISTA: string;
        MOTIVO: string;
        UNIDADE: string;
        QUANTIDADE: string;
        VELOCIDADE_MAXIMA: string;
        DATA: string;
        ULTIMA_OCORRENCIA: string;
        CONTATO: {
          id: number;
          nome: string;
          contato: string;
        };
    }
}

function getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
        return 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

export function OcorrenceTableRow({informacoes}: OcorrenceTableRowProps ) {
    const handleNotificar = () => {
        if (informacoes.CONTATO && informacoes.CONTATO.contato) {
            const phoneNumber = informacoes.CONTATO.contato.replace(/\D/g, ''); // Remove caracteres não numéricos
            const message = encodeURIComponent(`*${getGreeting()}*, Venho por meio desta mensagem comunicar *${informacoes.MOTORISTA}* que foi gerada uma ocorrência de velocidade, com *${informacoes.QUANTIDADE}* ponta, sendo a máxima de *${informacoes.VELOCIDADE_MAXIMA}* no veículo *${informacoes.UNIDADE}* às *${informacoes.DATA}*.\nOrientamos manter sempre na média permitida, que é até 80 km. Obrigado pela atenção.`);
            const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <TableRow>
            <TableCell className="font-medium">{informacoes.MOTORISTA}</TableCell>
            <TableCell className="text-gray-500">{informacoes.MOTIVO}</TableCell>
            <TableCell>{informacoes.UNIDADE}</TableCell>
            <TableCell className="font-semibold">{informacoes.QUANTIDADE}</TableCell>
            <TableCell className="font-medium text-red-500">{informacoes.VELOCIDADE_MAXIMA}</TableCell>
            <TableCell className="font-medium">{informacoes.DATA}</TableCell>
            <TableCell className="font-medium">{informacoes.ULTIMA_OCORRENCIA}</TableCell>
            <TableCell className="font-medium">{informacoes.CONTATO && informacoes.CONTATO.contato}</TableCell>
            <TableCell className="font-medium">
                <Button variant="outline" onClick={handleNotificar}>Notificar</Button>
            </TableCell>
        </TableRow>
    )
}

//versão que usa  o desktopop
// import { Button } from "@/components/ui/button";
// import { TableCell, TableRow } from "@/components/ui/table";

// export interface OcorrenceTableRowProps {
//     informacoes: {
//         ID: number;
//         MOTORISTA: string;
//         MOTIVO: string;
//         UNIDADE: string;
//         QUANTIDADE: string;
//         VELOCIDADE_MAXIMA: string;
//         DATA: string;
//         ULTIMA_OCORRENCIA: string;
//         CONTATO: {
//           id: number;
//           nome: string;
//           contato: string;
//         };
//     }
// }

// function getGreeting() {
//     const currentHour = new Date().getHours();
//     if (currentHour >= 6 && currentHour < 12) {
//         return 'Bom dia';
//     } else if (currentHour >= 12 && currentHour < 18) {
//         return 'Boa tarde';
//     } else {
//         return 'Boa noite';
//     }
// }

// export function OcorrenceTableRow({informacoes}: OcorrenceTableRowProps ) {
//     const handleNotificar = () => {
//         if (informacoes.CONTATO && informacoes.CONTATO.contato) {
//             const phoneNumber = informacoes.CONTATO.contato.replace(/\D/g, ''); // Remove caracteres não numéricos
//             const message = encodeURIComponent(`*${getGreeting()}*, Venho por meio desta mensagem comunicar *${informacoes.MOTORISTA}* que foi gerada uma ocorrência de velocidade, com *${informacoes.QUANTIDADE}* ponta, sendo a máxima de *${informacoes.VELOCIDADE_MAXIMA}* no veículo *${informacoes.UNIDADE}* às *${informacoes.DATA}*.\nOrientamos manter sempre na média permitida, que é até 80 km. Obrigado pela atenção.`);
//             const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
//             window.location.href = whatsappUrl;
//         }
//     };

//     return (
//         <TableRow>
//             <TableCell className="font-medium">{informacoes.MOTORISTA}</TableCell>
//             <TableCell className="text-gray-500">{informacoes.MOTIVO}</TableCell>
//             <TableCell>{informacoes.UNIDADE}</TableCell>
//             <TableCell className="font-semibold">{informacoes.QUANTIDADE}</TableCell>
//             <TableCell className="font-medium text-red-500">{informacoes.VELOCIDADE_MAXIMA}</TableCell>
//             <TableCell className="font-medium">{informacoes.DATA}</TableCell>
//             <TableCell className="font-medium">{informacoes.ULTIMA_OCORRENCIA}</TableCell>
//             <TableCell className="font-medium">{informacoes.CONTATO && informacoes.CONTATO.contato}</TableCell>
//             <TableCell className="font-medium">
//                 <Button variant="outline" onClick={handleNotificar}>Notificar</Button>
//             </TableCell>
//         </TableRow>
//     )
// }