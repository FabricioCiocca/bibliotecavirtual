from rest_framework import viewsets
from .serializer import TypeUserSerializer, CredentialsUserSerializer, UserSerializer, AcademicFieldSerializer, SpecialtySerializer
from .models import TypeUser, CredentialsUser, User, AcademicField, Specialty
# Create your views here.

class TypeUserView(viewsets.ModelViewSet):
    serializer_class = TypeUserSerializer
    queryset = TypeUser.objects.all()

class CredentialsUserView(viewsets.ModelViewSet):
    serializer_class = CredentialsUserSerializer
    queryset = CredentialsUser.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class AcademicFieldView(viewsets.ModelViewSet):
    serializer_class = AcademicFieldSerializer
    queryset = AcademicField.objects.all()

class SpecialtyView(viewsets.ModelViewSet):
    serializer_class = SpecialtySerializer
    queryset = Specialty.objects.all()
