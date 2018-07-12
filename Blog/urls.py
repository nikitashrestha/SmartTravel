from django.conf.urls import url
from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views
from Index.views import index as i

app_name = "Blog"

urlpatterns=[
    url(r'^settings/$', views.settings, name="settings"),
]

urlpatterns+=[
    url(r'^$', views.index, name="index" ),
    url(r'^blogDetail/(?P<blogId>\d+)/', views.blogDetail, name='blogDetail'),

    path('new_post/', views.new_post, name='new_post'),
    path('edit_post/<blogpost_id>', views.edit_post, name='edit_post'),
    path('delete_post/<blogpost_id>', views.delete_post, name='delete_post'),
    path('simple_search/', views.simple_search, name='simple_search'),
]