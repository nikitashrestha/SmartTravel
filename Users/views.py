from django.shortcuts import render

from django.urls import reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponseRedirect

# Create your views here.

def logout_view(request):
    """Logout the user"""
    logout(request)
    return HttpResponseRedirect(reverse('index'))

def register(request):
    '''Register a new user'''

    if(request.method != 'POST'):
        form = UserCreationForm()   #blank form
    else:
        #Process completed form
        form = UserCreationForm(data=request.POST)

        if(form.is_valid()):
            new_user = form.save()

            authenticated_user = authenticate(username=new_user.username,
                                              password=request.POST['password1'])
            login(request, authenticated_user)
            return HttpResponseRedirect(reverse('index'))

    context = {'form': form}
    return render(request, 'users/register.html', context)