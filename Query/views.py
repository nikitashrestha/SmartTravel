from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import query


class search(TemplateView):
    template_name="Query/search_partA.html"
    q = query() #create an instance
    def get(self, request):
        return render(request, self.template_name, {'query': self.q})

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
