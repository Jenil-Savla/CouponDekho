from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterAPI.as_view(), name='Register'),
    path('login/', views.LoginAPI.as_view(), name="Login"),
]