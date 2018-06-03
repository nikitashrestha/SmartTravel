from django.db import models
from django import forms


#query form
class query(forms.Form):
    input=forms.CharField(label='Search: ', max_length=50)

