import "./MetricCard.css";

interface Props{

    titulo:string;

    valor:string;

    color:string;

}

export default function MetricCard({

    titulo,

    valor,

    color

}:Props){

    return(

        <div className="metric-card">

            <div
                className="metric-icon"
                style={{background:color}}
            />

            <h2>{valor}</h2>

            <span>{titulo}</span>

        </div>

    );

}