
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('Query.urls')),
    url(r'^users/', include('Users.urls')),
]
