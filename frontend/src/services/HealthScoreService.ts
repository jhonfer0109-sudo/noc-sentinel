export class HealthScoreService {

    static calculate(

        sla: number,

        tickets: number,

        alertas: number,

        clientes: number

    ): number {

        let score = 100;

        score -= tickets * 0.25;

        score -= alertas * 0.8;

        score += (sla - 95) * 2;

        score += clientes * 0.05;

        if (score > 100) {

            score = 100;

        }

        if (score < 0) {

            score = 0;

        }

        return Number(score.toFixed(1));

    }

}