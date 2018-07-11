from django.shortcuts import render, HttpResponseRedirect, redirect
from django.urls import reverse
from django.http import Http404
import os
from django.contrib.auth.decorators import login_required

from .models import BlogPost
from .forms import BlogPostForm

# Create your views here.

def settings(request):
    template_path = "Blog/settings.html"
    return render(request, template_path)

# Create your views here.
def index(request):

    blogPosts = BlogPost.objects.order_by('-date_pub')
    context = {'blogPosts': blogPosts}

    template_path="Blog/index.html"
    return render(request, template_path, context)

def blogDetail(request, blogId):

    blog = BlogPost.objects.get(id=blogId)
    context = {'blog': blog}
    return render(request, 'Blog/blogDetail.html', context)


@login_required
def new_post(request):
    '''ADd a new post'''
    if(request.method != 'POST'):
        form = BlogPostForm()
    else:
        form = BlogPostForm(request.POST)
        if(form.is_valid()):
            new_post = form.save(commit=False)
            new_post.owner = request.user
            new_post.save()
            return HttpResponseRedirect(reverse('Blog:index'))

    context = {'form': form}
    return render(request, 'Blog/new_post.html', context)

@login_required
def edit_post(request, blogpost_id):
    '''Edit an existing post'''
    blogpost = BlogPost.objects.get(id=blogpost_id)
    if(blogpost.owner != request.user):
        raise Http404

    title = blogpost.title
    content = blogpost.content

    if request.method != 'POST':
        form = BlogPostForm(instance=blogpost)
    else:
        form = BlogPostForm(instance=blogpost, data=request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('Blog:index'))

    context = {'form': form, 'blogpost': blogpost}
    return render(request, 'Blog/edit_post.html', context)


@login_required
def delete_post(request, blogpost_id):

    blogpost = BlogPost.objects.get(id=blogpost_id)

    if(blogpost.owner != request.user):
        raise Http404
    else:
        blogpost.delete()

    return redirect('Blog:index')