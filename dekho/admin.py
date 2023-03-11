from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(User)
admin.site.register(Coupon)
admin.site.register(Redemption)
admin.site.register(Product)
admin.site.register(CouponProduct)
admin.site.register(Order)
admin.site.register(OrderItem)