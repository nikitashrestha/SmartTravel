from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import query_form
from .models import query_db
import simplejson as json


class search(TemplateView):
    template_name="Query/search_base.html"
    q = query_form() #create an instance
    def get(self, request):
        return render(request, self.template_name, {'query': self.q})

'''
def index(request):
    if request.method=='POST':
        template_name="Query/result_partA.html"
        q=query(request.POST)
        if q.is_valid():
            return render(request, template_name, {'result': q})
    else:
        q=query()
        template_name="Query/search_partA.html"
        return render(request, template_name, {'query':q})

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

'''

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