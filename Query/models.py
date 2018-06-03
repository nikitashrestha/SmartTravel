from django.db import models
from django import forms


#query form
class query(forms.Form):
    input=forms.CharField(label='Search: ', max_length=50)


class UserQuery(models.Model):
    user_input=models.CharField(max_length=50)
    user_name=models.CharField(max_length=30)
    def __str__(self):
        return self.user_name+ "'s input is: "+ self.user_input


