from django.contrib import admin

# Register your models here.
from .models import BlogPost, BlogComment, Blog_Search

admin.site.register(BlogPost)
admin.site.register(BlogComment)
admin.site.register(Blog_Search)