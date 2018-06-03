from django.conf.urls import url
from django.contrib import admin
from .import views
urlpatterns=[
    url(r'^$', views.index.as_view(),name="index" ),
    url(r'^submit/$', views.submit.as_view(),name="submit" ),

]