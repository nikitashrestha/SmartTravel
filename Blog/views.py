from django.shortcuts import render


# Create your views here.
def index(request):
    template_path="Blog/index.html"
    return render(request, template_path)
def settings(request):
    template_path = "Blog/settings.html"
    return render(request, template_path)
