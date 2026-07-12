import "./TicketModal.css";

import { useEffect, useState } from "react";

import type { Ticket } from "../../../types/Ticket";

interface Props{

    open:boolean;

    onClose:()=>void;

    onSave:(ticket:Ticket)=>void;

    ticket?:Ticket|null;

}

export default function TicketModal({

    open,

    onClose,

    onSave,

    ticket

}:Props){

    const[titulo,setTitulo]=useState("");

    const[cliente,setCliente]=useState("");

    const[prioridad,setPrioridad]=useState<Ticket["prioridad"]>("Media");

    const[descripcion,setDescripcion]=useState("");

    useEffect(()=>{

        if(ticket){

            setTitulo(ticket.titulo);

            setCliente(ticket.cliente);

            setPrioridad(ticket.prioridad);

            setDescripcion(ticket.descripcion);

        }else{

            setTitulo("");

            setCliente("");

            setPrioridad("Media");

            setDescripcion("");

        }

    },[ticket]);

    if(!open){

        return null;

    }

    function guardar(){

        onSave({

            id:ticket?.id ?? `INC-${Math.floor(Math.random()*9000)+1000}`,

            titulo,

            cliente,

            prioridad,

            estado:ticket?.estado ?? "Abierto",

            sla:ticket?.sla ?? 100,

            descripcion

        });

        onClose();

    }

    return(

        <div className="modal-overlay">

            <div className="ticket-modal">

                <h2>

                    {ticket ? "Editar Ticket" : "Nuevo Ticket"}

                </h2>

                <input

                    placeholder="Título"

                    value={titulo}

                    onChange={(e)=>setTitulo(e.target.value)}

                />

                <input

                    placeholder="Cliente"

                    value={cliente}

                    onChange={(e)=>setCliente(e.target.value)}

                />

                <select

                    value={prioridad}

                    onChange={(e)=>setPrioridad(e.target.value as Ticket["prioridad"])}

                >

                    <option>Alta</option>

                    <option>Media</option>

                    <option>Baja</option>

                </select>

                <textarea

                    rows={5}

                    placeholder="Descripción"

                    value={descripcion}

                    onChange={(e)=>setDescripcion(e.target.value)}

                />

                <div className="modal-buttons">

                    <button

                        className="cancel"

                        onClick={onClose}

                    >

                        Cancelar

                    </button>

                    <button

                        className="save"

                        onClick={guardar}

                    >

                        Guardar

                    </button>

                </div>

            </div>

        </div>

    );

}