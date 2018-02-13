from django.conf.urls import url
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    url(r'^$', RedirectView.as_view(url='pages/addition3d')),
    url(r'^pages/(?P<url>[a-zA-Z0-9]+)/$', views.page, name='calcpage')
]