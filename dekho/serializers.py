from rest_framework import serializers
from .models import *

import re
email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class RegisterSerializer(serializers.ModelSerializer):
	password=serializers.CharField(max_length=32,min_length=8,write_only = True)
	
	class Meta:
		model = User
		fields = ['name','email','password']

	def validate(self,attrs):
		email = attrs.get('email',' ')

		if not email_pattern.match(email):
			raise serializers.ValidationError('Please enter a valid email!')
		return attrs
		
	def create(self,validated_data):
            return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    
    class Meta:
        model = User
        fields = ['email','password']
	
class CouponSerializer(serializers.ModelSerializer):
	class Meta:
		model = Coupon
		fields = '__all__'

class RedeemSerializer(serializers.ModelSerializer):
	class Meta:
		model = Redemption
		fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = '__all__'

class CouponProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = CouponProduct
		fields = '__all__'