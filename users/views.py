from rest_framework import viewsets
from .serializer import TypeUserSerializer, CredentialsUserSerializer
from .models import TypeUser, CredentialsUser
# Create your views here.

class TypeUserView(viewsets.ModelViewSet):
    serializer_class = TypeUserSerializer
    queryset = TypeUser.objects.all()

class CredentialsUserView(viewsets.ModelViewSet):
    serializer_class = CredentialsUserSerializer
    queryset = CredentialsUser.objects.all()