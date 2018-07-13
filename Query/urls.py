from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from .import views

urlpatterns=[
    # url(r'^<>$', views.index,name="index" ),  add guest_id=0/1 reg expression
    url(r'^createpost/$', views.create_post,name="createpost" ),


]
