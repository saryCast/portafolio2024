from django.db import models
class StackTecnologico(models.Model):
    desarrollo_web = models.TextField()
    desarrollo_software = models.TextField()
    base_datos = models.TextField()
    otros = models.TextField()

    def __str__(self):
        return f"Stack Tecnológico (ID: {self.id})"