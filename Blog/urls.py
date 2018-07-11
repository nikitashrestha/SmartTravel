from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views
from Index.views import index as i

app_name = "Blog"

urlpatterns=[
    url(r'^$', views.index,name="index" ),
    url(r'^settings/$', views.settings, name="settings"),
]

urlpatterns+=[
    url(r'^blogDetail/(?P<blogId>\d+)/', views.blogDetail, name='blogDetail'),
    url(r'^$', views.index, name="index" ),
    url(r'^blogDetail/(?P<blogId>\d+)/', views.blogDetail, name='blogDetail'),

    url('new_post/', views.new_post, name='new_post'),
    url('edit_post/<blogpost_id>', views.edit_post, name='edit_post'),
    url('delete_post/<blogpost_id>', views.delete_post, name='delete_post'),

]