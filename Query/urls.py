from django.conf.urls import url
from django.contrib import admin
from .import views

urlpatterns=[
    url(r'^search/$', views.search.as_view(),name="search" ),
   # url(r'^submit/$', views.submit,name="submit" ),
   # url(r'^test/$', views.test,name="test"),
]