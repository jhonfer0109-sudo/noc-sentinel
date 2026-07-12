export interface AIAnalysis {

    greeting: string;

    status: string;

    recommendation: string;

}

export class SentinelAIService {

    static analyze(

        healthScore:number,

        tickets:number,

        alertas:number

    ):AIAnalysis{

        let greeting="Buenos días María Fernanda";

        let status="La operación se encuentra estable.";

        let recommendation="No se requieren acciones inmediatas.";

        if(alertas>5){

            status="Se detectaron múltiples alertas críticas.";

            recommendation="Revise inmediatamente el panel de alertas.";

        }

        if(tickets>20){

            recommendation="Priorice los tickets críticos antes del mediodía.";

        }

        if(healthScore<90){

            status="La salud de la plataforma está disminuyendo.";

            recommendation="Revise infraestructura y SLA.";

        }

        return{

            greeting,

            status,

            recommendation

        };

    }

}