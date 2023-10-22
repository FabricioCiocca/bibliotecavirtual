from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('typeUsers/', include('users.urls')),
    path('credentialsUsers/', include('users.urls'))
]
