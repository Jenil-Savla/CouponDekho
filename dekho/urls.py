from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterAPI.as_view(), name='Register'),
    path('login/', views.LoginAPI.as_view(), name="Login"),
    path('logout/', views.LogoutAPI.as_view(), name="Logout"),
    path('coupon/', views.CouponListAPI.as_view(), name="Coupon"),
    path('coupon/<int:pk>/', views.CouponAPI.as_view(), name="CouponDetail"),
]