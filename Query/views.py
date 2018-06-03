from django.shortcuts import render
from django.views.generic import TemplateView
from .models import query

class index(TemplateView):
    template_name="Query/search_page.html"
    q=query()
    def get(self, request):
        return render(request, self.template_name, {'query': q})

class submit(TemplateView):
    template_name="Query/index.html"
    def get(self, request):
        result = query(request.GET)
        return render(request, self.template_name, {'res': result})