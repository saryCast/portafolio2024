from django.shortcuts import render, redirect
from .models import StackTecnologico, Proyecto

def index_page(request):
    stacks = StackTecnologico.objects.all()
    
    # Procesar los campos para dividirlos en listas
    for stack in stacks:
        stack.desarrollo_web = stack.desarrollo_web.split(", ")
        stack.desarrollo_software = stack.desarrollo_software.split(", ")
        stack.base_datos = stack.base_datos.split(", ")
        stack.otros = stack.otros.split(", ")
    
     # Obtener todos los proyectos
    proyectos = Proyecto.objects.all()

    return render(request, 'index.html', {'stacks': stacks, 'proyectos': proyectos})