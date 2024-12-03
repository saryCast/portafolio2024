from django.db import models
class StackTecnologico(models.Model):
    desarrollo_web = models.TextField()
    desarrollo_software = models.TextField()
    base_datos = models.TextField()
    otros = models.TextField()

    def __str__(self):
        return f"Stack Tecnológico (ID: {self.id})"
    
class Proyecto(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    tecnologias = models.TextField()
    imagen = models.ImageField(upload_to='proyectos/')

    def __str__(self):
        return self.titulo