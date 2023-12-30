from rest_framework import serializers
from .models import TypeUser, CredentialsUser, User, AcademicField, Specialty

#Serializar es convertir los objetos de la bd en JSON
class TypeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeUser
        #fields = ('id', 'typeUser') #Indicamos qué campos queremos en el json
        fields = '__all__' #con esto indicamos que queremos todos los campos pal json

class CredentialsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CredentialsUser
        fields = ('id', 'userName', 'password')
       # fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AcademicFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicField
        fields = '__all__'

class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialty
        fields = '__all__'
        