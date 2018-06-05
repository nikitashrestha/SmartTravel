from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .models import query

class index(TemplateView):
    template_name="Query/search_page.html"
    q = query() #create an instance
    def get(self, request):
        return render(request, self.template_name, {'query': self.q})

'''
class submit(TemplateView):
    template_name="Query/get_query_result.html"
    def post(self, request):
        result = query(request.POST)
        return render(request, self.template_name, {'result': result})
    
'''
def submit(request):
    if request.method=='POST':
        template_name="Query/get_query_result.html"
        q=query(request.POST)
        if q.is_valid():
            return render(request, template_name, {'result': q})
    else:
        q=query()
        template_name="Query/index.html"
        return render(request, template_name, {'result':q})