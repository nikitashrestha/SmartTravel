from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser): #more like extending than overriding
    #username, password, email
    dob=models.CharField(max_length=20, null=True)
    address=models.CharField(max_length=30, null=True)
    phonenumber=models.IntegerField(blank=True, null=True)
    profession=models.CharField(max_length=20, blank=True, null=True)
    favorite_Quote=models.CharField(max_length=100,  null=True)

#Because photos are numerous and we have to map them onto many of operations
class Photos(models.Model):
    Options=(
        ('prof', 'Profile'),
        ('bl', 'blog'),
        ('res', 'restaurant'),
        ('ho', 'hotel'),
        ('pa', 'park'),
        ('st', 'store'),
    )
    title=models.CharField(max_length=20, null=True)
    photo= models.ImageField(upload_to='images', null=True)
    type=models.CharField(max_length=10, choices=Options)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True) #If user is deleted, so are his/her photos


class Blog(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)#If user is deleted, so are his/her blog
    tags=models.CharField( max_length=30, blank=True, null=True) #separate by commas
    Title=models.CharField(max_length=30)
    Content=models.CharField(max_length=30)
    likes=models.IntegerField(null=True)
    Comment=models.CharField(max_length=30)

class Query(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)  # user instance deletion is blocked
    text=models.CharField(max_length=30, null=True)
    tags=models.CharField(max_length=30, blank=True, null=True)
    date=models.DateField(null=True)


'''
class Result(models.Model):
    #what are to be saved in db ??

7. Result_indiividual
a. url
b. id
c. title
d. content
e. Photos
f. Rating
g. Comment

'''

class Blog_Search(models.Model):
    writer_id=models.IntegerField() # user instance deletion is blocked
    viewer_id=models.IntegerField()
    date=models.DateField(null=True)
    tags=models.CharField(max_length=20, blank=True, null=True)
    text=models.CharField(max_length=30, null=True)





