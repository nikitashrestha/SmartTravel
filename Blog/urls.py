from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views
from Index.views import index as i

urlpatterns=[
    url(r'^$', views.index,name="index" ),
    url(r'^settings/$', views.settings,name="settings" ),
]
