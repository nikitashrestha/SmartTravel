from django.shortcuts import render
import os

from .models import BlogPost

# Create your views here.

def settings(request):
    template_path = "Blog/settings.html"
    return render(request, template_path)

# Create your views here.
def index(request):

    blogPosts = BlogPost.objects.all()
    context = {'blogPosts': blogPosts}

    template_path="Blog/index.html"
    return render(request, template_path, context)

def blogDetail(request, blogId):

    blog = BlogPost.objects.get(id=blogId)
    context = {'blog': blog}
    return render(request, 'Blog/blogDetail.html', context)