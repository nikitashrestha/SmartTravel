from django.shortcuts import render
import os

# Create your views here.
def index(request):
    template_path="Blog/index.html"
    return render(request, template_path)
