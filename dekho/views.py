from rest_framework.generics import GenericAPIView
from rest_framework import status,permissions
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from django.contrib.auth import authenticate

from .models import *
from .serializers import *

class RegisterAPI(GenericAPIView):
	
	serializer_class = RegisterSerializer
	
	def post(self,request,*args,**kwargs):
		try:
			data = request.data
			serializer = self.serializer_class(data=data)
			if serializer.is_valid(raise_exception = True):
				user = serializer.save()
				return Response({"status" : True ,"data" : serializer.data, "message" : 'Request Sent'},status=status.HTTP_200_OK)
			return Response({"status" : False ,"data" : serializer.errors, "message" : "Failure"}, status=status.HTTP_400_BAD_REQUEST)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)

class LoginAPI(GenericAPIView):
	
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		email = request.data.get('email',None)
		password = request.data.get('password',None)
		user = authenticate(email = email, password = password)
		if user :
			serializer = self.serializer_class(user)
			token,k = Token.objects.get_or_create(user=user)
			return Response({"status" : True ,"data" : {'token' : token.key,'email' : user.email}, "message" : 'Login Success'},status = status.HTTP_200_OK)
		return Response({"status" : False ,"data" : {}, "message" : 'Invalid Credentials'},status = status.HTTP_401_UNAUTHORIZED)
	

class LogoutAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	
	def post(self,request,*args,**kwargs):
		request.user.auth_token.delete()
		return Response({"status" : True ,"data" : {}, "message" : 'Logout Success'},status = status.HTTP_200_OK)

class CouponListAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	
	def get(self,request):
		try:
			coupons = Coupon.objects.all()
			return Response({"status" : True ,"data" : CouponSerializer(coupons,many=True).data, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
	
	def post(self,request):
		try:
			data = request.data
			serializer = CouponSerializer(data=data)
			if serializer.is_valid(raise_exception = True):
				coupon = serializer.save(user = request.user)
				return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status=status.HTTP_200_OK)
			return Response({"status" : False ,"data" : serializer.errors, "message" : "Failure"}, status=status.HTTP_400_BAD_REQUEST)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
		
class CouponAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	
	def get(self,request,pk):
		try:
			coupon = Coupon.objects.get(pk=pk)
			return Response({"status" : True ,"data" : CouponSerializer(coupon).data, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
		
	def post(self,request,pk ):
		try:
			data = request.data
			coupon = Coupon.objects.filter(data["user"] )
			serializer = CouponSerializer(coupon, many = True)
			return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status=status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
	
	def put(self,request,pk):
		try:
			coupon = Coupon.objects.get(pk=pk)
			data = request.data
			serializer = CouponSerializer(coupon,data=data)
			if serializer.is_valid(raise_exception = True):
				coupon = serializer.save()
				return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status=status.HTTP_200_OK)
			return Response({"status" : False ,"data" : serializer.errors, "message" : "Failure"}, status=status.HTTP_400_BAD_REQUEST)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
	
	def delete(self,request,pk):
		try:
			coupon = Coupon.objects.get(pk=pk)
			coupon.delete()
			return Response({"status" : True ,"data" : {}, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)