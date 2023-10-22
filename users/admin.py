from django.contrib import admin
from .models import TypeUser, AcademicField, Specialty, User, CredentialsUser

# Register your models here.
admin.site.register(TypeUser)
admin.site.register(AcademicField)
admin.site.register(Specialty)
admin.site.register(User)
admin.site.register(CredentialsUser)