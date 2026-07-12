import "./TicketFilters.css";

interface Props{

    search:string;

    status:string;

    priority:string;

    onSearch:(value:string)=>void;

    onStatus:(value:string)=>void;

    onPriority:(value:string)=>void;

}

export default function TicketFilters({

    search,

    status,

    priority,

    onSearch,

    onStatus,

    onPriority

}:Props){

    return(

        <div className="ticket-filters">

            <input

                placeholder="Buscar ticket..."

                value={search}

                onChange={(e)=>onSearch(e.target.value)}

            />

            <select

                value={status}

                onChange={(e)=>onStatus(e.target.value)}

            >

                <option value="">Todos los estados</option>

                <option value="Abierto">Abierto</option>

                <option value="En Progreso">En Progreso</option>

                <option value="Resuelto">Resuelto</option>

            </select>

            <select

                value={priority}

                onChange={(e)=>onPriority(e.target.value)}

            >

                <option value="">Todas las prioridades</option>

                <option value="Alta">Alta</option>

                <option value="Media">Media</option>

                <option value="Baja">Baja</option>

            </select>

        </div>

    );

}