from django.db import models

# Create your models here.

class TypeUser(models.Model):
    typeUser = models.CharField(max_length=200)

    def __str__(self):
        return self.typeUser + ''

class AcademicField(models.Model):
    academicField = models.CharField(max_length=200)

    def __str__(self):
        return self.academicField + ''

class Specialty(models.Model):
    specialty = models.CharField(max_length=200)
    academicField = models.ForeignKey(AcademicField, on_delete=models.CASCADE)

    def __str__(self):
        return self.specialty + ' [' + self.academicField.academicField + ']'

class User(models.Model):
    name = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    institution = models.CharField(max_length=50)
    codeInstitutional = models.CharField(max_length=20)
    phoneNumber = models.CharField(max_length=20)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE)
    typeUser = models.ForeignKey(TypeUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + ' [' + self.typeUser.typeUser + ']'

class CredentialsUser(models.Model):
    userName = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.userName + ' -> [' + self.user.name + ']'
