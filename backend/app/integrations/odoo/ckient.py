import xmlrpc.client

from app.core.config import settings


class OdooClient:

    def __init__(self):

        self.url = settings.ODOO_URL

        self.database = settings.ODOO_DATABASE

        self.username = settings.ODOO_USERNAME

        self.password = settings.ODOO_PASSWORD

        self.common = xmlrpc.client.ServerProxy(
            f"{self.url}/xmlrpc/2/common"
        )

        self.models = xmlrpc.client.ServerProxy(
            f"{self.url}/xmlrpc/2/object"
        )

        self.uid = None

    def authenticate(self):

        self.uid = self.common.authenticate(
            self.database,
            self.username,
            self.password,
            {}
        )

        return self.uid

    def version(self):

        return self.common.version()

    def connected(self):

        return self.uid is not None