from django.conf.urls import url
from django.contrib import admin
#from dajaxice.core import dajaxice_autodiscover, dajaxice_config
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from .import views

urlpatterns=[
    url(r'^search/$', views.search.as_view(),name="search" ),
   # url(r'^submit/$', views.submit,name="submit" ),
   # url(r'^test/$', views.test,name="test"),
    url(r'^createpost/$', views.create_post, name='createpost'),
]
#urlpatterns += [url(r'^%s/' % settings.DAJAXICE_MEDIA_PREFIX, include('dajaxice.urls')), ]
#urlpatterns += staticfiles_urlpatterns()