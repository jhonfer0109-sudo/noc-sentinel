"""
Constantes globales de NOC Sentinel
"""

# ==========================
# Estados de Tickets
# ==========================

TICKET_ESTADO_ABIERTO = "Abierto"
TICKET_ESTADO_EN_PROCESO = "En Proceso"
TICKET_ESTADO_PENDIENTE = "Pendiente"
TICKET_ESTADO_RESUELTO = "Resuelto"
TICKET_ESTADO_CERRADO = "Cerrado"

TICKET_ESTADOS = [
    TICKET_ESTADO_ABIERTO,
    TICKET_ESTADO_EN_PROCESO,
    TICKET_ESTADO_PENDIENTE,
    TICKET_ESTADO_RESUELTO,
    TICKET_ESTADO_CERRADO,
]

# ==========================
# Prioridades
# ==========================

PRIORIDAD_BAJA = "Baja"
PRIORIDAD_MEDIA = "Media"
PRIORIDAD_ALTA = "Alta"
PRIORIDAD_CRITICA = "Crítica"

PRIORIDADES = [
    PRIORIDAD_BAJA,
    PRIORIDAD_MEDIA,
    PRIORIDAD_ALTA,
    PRIORIDAD_CRITICA,
]

# ==========================
# Roles
# ==========================

ROL_ADMIN = "Administrador"
ROL_SUPERVISOR = "Supervisor"
ROL_AGENTE = "Agente"

ROLES = [
    ROL_ADMIN,
    ROL_SUPERVISOR,
    ROL_AGENTE,
]