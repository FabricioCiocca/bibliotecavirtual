from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from users import views

#api versioning
router = routers.DefaultRouter()
router.register(r'typeUsers', views.TypeUserView, 'typeUsers')
router.register(r'credentialsUsers', views.CredentialsUserView, 'credentialsUsers')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title= "Users API"))
]