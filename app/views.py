from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.template.context_processors import request

# Create your views here.

def home(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request=request))