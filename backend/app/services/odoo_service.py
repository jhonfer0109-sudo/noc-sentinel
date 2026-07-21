from app.integrations.odoo.client import OdooClient


class OdooService:

    def __init__(self):

        self.client = OdooClient()

    def connect(self):

        uid = self.client.authenticate()

        if not uid:

            return {
                "success": False,
                "message": "No fue posible conectar con Odoo"
            }

        return {
            "success": True,
            "uid": uid,
            "version": self.client.version()
        }