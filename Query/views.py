from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import query_form
from .models import query_db
import simplejson as json


class search(TemplateView):
    template_name="Query/result_base.html"
    q = query_form() #create an instance
    def get(self, request):
        return render(request, self.template_name, {'form': self.q})

'''
class index(TemplateView):
    template_name="Query/index.html"
    q = query_form() #send context for verifications in html
    def get(self, request):
        return render(request, self.template_name, {'form': self.q})
    def post(self, request):
        template_name="Query/search_result.html"
        user_input=query_form(request.POST)
        if user_input.is_valid():
            user_input.save()
        return render(request, self.template_name, {'result': user_input})
'''

def index(request):
    q = query_form()
    if request.method=='GET':
        template_name="Query/index.html"
        return render(request, template_name)
    else:
        r = query_form(request.POST)
        r.save()
        template_name="Query/search_result.html"
        return render(request, template_name, {'result':r})

def result(request):
    lat=27.679319
    lng=85.316809
    template_name="Query/result_base.html"
    return render(request, template_name, {'lat':lat, 'long': lng})
'''
def test(request):
    template_name = "Query/test.html"
    if request.method=="POST":
        return render(request, template_name)
    else:
        template_name="Query/test.html"
        var="get request bhayo"
        context={'test_var': var }
        return render(request, template_name, context)

#dajax use gareko
def d_search(request):
    form = query()
    return render(request, 'Query/search_base.html', locals())



#ajax integration
def create_post(request):
    if request.method == 'POST':
        post_text = request.POST.get('address') #fetch input data from fieldname='address' sent by post method
        post = query_db(address=post_text) #save it to db
        post.save()
        print("Data saved.....")

        response_data = {}  #response object back to the ajax
        response_data['result'] = 'Create post successful! and the data sent is: '
        response_data['postpk'] = post.pk

        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )
    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
        )
    
    '''