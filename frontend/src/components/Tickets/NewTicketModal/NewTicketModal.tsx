import "./NewTicketModal.css";

interface Props {

    open: boolean;

    onClose: () => void;

}

export default function NewTicketModal({

    open,

    onClose

}: Props) {

    if (!open) return null;

    return (

        <>
            <div
                className="modal-overlay"
                onClick={onClose}
            />

            <div className="modal">

                <h2>Nuevo Ticket</h2>

                <div className="form">

                    <input placeholder="Título" />

                    <input placeholder="Cliente" />

                    <select>

                        <option>Crítica</option>

                        <option>Alta</option>

                        <option>Media</option>

                        <option>Baja</option>

                    </select>

                    <select>

                        <option>Nuevo</option>

                        <option>Asignado</option>

                        <option>En Progreso</option>

                    </select>

                    <input placeholder="Técnico" />

                    <textarea

                        placeholder="Descripción"

                        rows={5}

                    />

                </div>

                <div className="modal-buttons">

                    <button className="guardar">

                        Guardar

                    </button>

                    <button

                        className="cancelar"

                        onClick={onClose}

                    >

                        Cancelar

                    </button>

                </div>

            </div>

        </>

    );

}