from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views

urlpatterns=[
    #url(r'^$', views.index ,name="index" ),
    url(r'^logout/$',auth_views.logout, {'template_name':'Index/logout.html'},name="logout" ),
    url(r'^$',auth_views.login, {'template_name':'Index/index.html'},name="index" ),
    url(r'^register/$', views.register, name="register"),
]
