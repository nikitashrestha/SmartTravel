from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from .import views

urlpatterns=[
    url(r'^$', views.index,name="index" ),
    url(r'^createpost/$', views.create_post,name="createpost" ),
]
