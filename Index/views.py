'''
This is the one !!!
Client Id: 
887968215094-tvuij35s8i0faqahqvssmtg9ltg1pett.apps.googleusercontent.com
Client secret:
63CrZ75ydvxXSUG5SnZr4RyO
'''

from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django import forms
from .forms import UserRegistrationForm

#render simple index's first frontpage
def index(request):
    return render(request, 'Index/index.html')

''' When user click on 'singup now!' url it maps onto is '/index/register' which is handled by given view  
Here user can view, fill and submit the register form 
Also get/post request is also handled here '''
def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            userObj = form.cleaned_data
            username = userObj['username']
            email =  userObj['email']
            password =  userObj['password']
            if not (User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists()):
                User.objects.create_user(username, email, password)
                user = authenticate(username = username, password = password)
                login(request, user)
                return HttpResponseRedirect('/index')
            else:
                raise forms.ValidationError('Looks like a username with that email or password already exists')

    else:
        form = UserRegistrationForm()
    return render(request, 'Index/register.html', {'form' : form})

