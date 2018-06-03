from django.shortcuts import render
from django.views.generic import TemplateView
from .models import query

class index(TemplateView):
    template_name="Query/index.html"
    q=query()
    def get(self, request):
        return render(request, self.template_name, {'query': self.q})

class submit(TemplateView):
    template_name="Query/get_query_result.html"
    def get(self, request):
        result=query(request.GET)
        return render(request, self.template_name, {'result': result})