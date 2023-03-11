from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterAPI.as_view(), name='Register'),
    path('login/', views.LoginAPI.as_view(), name="Login"),
    path('logout/', views.LogoutAPI.as_view(), name="Logout"),
    path('coupon/', views.CouponListAPI.as_view(), name="Coupon"),
    path('coupon/<int:pk>/', views.CouponAPI.as_view(), name="CouponDetail"),
    path('product/', views.ProductAPI.as_view(), name="Product"),
    path('product/<int:pk>/', views.ProductDetailAPI.as_view(), name="ProductDetail"),
    path('order/', views.OrderAPI.as_view(), name="Order"),
    path('orderitem/', views.OrderItemAPI.as_view(), name="OrderItem"),
    path('sku_list',views.sku_list,name="sku_list"),
]