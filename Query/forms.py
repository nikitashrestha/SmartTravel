from django.forms import ModelForm
from .models import query_db

class query_form(ModelForm):
    class Meta:
        model=query_db
        fields = ['address']

'''
#query form
class query(ModelForm):
    class Meta:
        model= db_query
        fields=['address']
        widgets={
            'address':TextInput(attrs={
                'id':'address',
                'required': True,
                'placeholder':'Enter query'
            }),
        }

'''
