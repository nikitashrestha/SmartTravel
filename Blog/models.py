from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class BlogPost(models.Model):
    ''''''
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_pub = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    #ispublic=models.BooleanField(default=True)

    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __str__(self):
        '''Returns string representation of BlogPost model'''
        return self.title[:50]

class BlogComment(models.Model):
    content = models.TextField(max_length=200)
    date_pub = models.DateTimeField(auto_now_add=True)
    blogPost = models.ForeignKey(BlogPost, on_delete=models.CASCADE)

    def __str__(self):
        '''Returns string representation of BlogComment model'''
        return self.content[:50]



class Blog_Search(models.Model):
    search_name=models.CharField(max_length=30) # kaslai search gareko
    viewer_id=models.IntegerField() # kasle search gareko
    searched_date = models.DateTimeField(auto_now_add=True)