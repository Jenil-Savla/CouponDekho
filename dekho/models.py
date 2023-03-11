from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from rest_framework.authtoken.models import Token

class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    username=None
    first_name = None
    last_name = None
    email = models.EmailField(("Email Address"),primary_key=True)
    name = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def token(self):
        token = Token.objects.get(user=User.objects.get(self.id))
        return token
    


class Coupon(models.Model):
    COUPON_FORMAT_CHOICES = (
        ('alphanumeric', 'Alphanumeric'),
        ('numeric', 'Numeric'),
        ('alphabetic', 'Alphabetic'),
    )

    COUPON_APPLICABLE_CHOICES = (
        ('overall_cart_amount', 'Overall Cart Amount'),
        ('specific_sku', 'Specific SKU in Cart'),
    )

    COUPON_DISCOUNT_CHOICES = (
        ('percentage', 'Percentage'),
        ('amount', 'Amount'),
    )

    code = models.CharField(max_length=100, unique=True)
    format = models.CharField(max_length=20, choices=COUPON_FORMAT_CHOICES, default='alphanumeric')
    applicable_to = models.CharField(max_length=50, choices=COUPON_APPLICABLE_CHOICES, default='overall_cart_amount')
    discount_type = models.CharField(max_length=20, choices=COUPON_DISCOUNT_CHOICES, default='percentage')
    discount_value = models.DecimalField(max_digits=12, decimal_places=2)
    max_discount_amount = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    redemption_limit = models.IntegerField(default=1)
    used = models.IntegerField(default=0)
    active = models.BooleanField(default=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    def __str__(self):
        return self.code
    
class CouponProduct(models.Model):
    coupon = models.ForeignKey(Coupon, on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)

    def __str__(self):
        return self.coupon.code

class Redemption(models.Model):
    coupon = models.ForeignKey(Coupon, on_delete=models.CASCADE)
    redeemed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.coupon.code
    

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    sku = models.CharField(max_length=20, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
