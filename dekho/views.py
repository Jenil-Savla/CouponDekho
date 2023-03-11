from rest_framework.generics import GenericAPIView
from rest_framework import status,permissions
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from django.contrib.auth import authenticate

from .models import *
from .serializers import *

import csv

class RegisterAPI(GenericAPIView):
	
	serializer_class = RegisterSerializer
	
	def post(self,request,*args,**kwargs):
		try:
			data = request.data
			serializer = self.serializer_class(data=data)
			if serializer.is_valid(raise_exception = True):
				user = serializer.save()
				token = Token.objects.create(user=user)
				data = dict(serializer.data)
				data['token'] = token.key
				return Response({"status" : True ,"data" : data, "message" : 'Request Sent'},status=status.HTTP_200_OK)
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
			#Generate Coupon Code
			data["code"] = 152369
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
		
	def post(self,request,pk):
		try:
			data = request.data
			coupon = Coupon.objects.filter(user = data["user"])
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
		
class ProductAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	
	def get(self,request):
		try:
			products = Product.objects.filter(company = request.user)
			serializer = ProductSerializer(products, many = True)
			return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
		
	def post(self, request):
		try:
			file = request.data["product_list"]
			with open('films/pixar.csv') as file:
				reader = csv.reader(file)
				for row in reader:
					product = Product(company=request.user, name=row[0], description=row[1], price=row[2], quantity=row[3], sku = row[4], image_url = row[5])
					product.save()
				products = Product.objects.filter(company = request.user)
				serializer = ProductSerializer(products, many = True)
			return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)

class OrderItemAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	
	def get(self,request):
		try:
			orders = Order.objects.filter(user = request.user)
			serializer = OrderSerializer(orders, many = True)
			return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
		
	def post(self,request):
		try:
			data = request.data
			cart,_ = Order.objects.get_or_create(user = request.user, payment_status = False)
			serializer = OrderItemSerializer(data=data)
			if serializer.is_valid(raise_exception = True):
				orderitem = serializer.save(order = cart)
				cart.total_amount += (orderitem.price * orderitem.quantity)
				cart.save()
				return Response({"status" : True ,"data" : serializer.data, "message" : 'Success'},status=status.HTTP_200_OK)
			return Response({"status" : False ,"data" : serializer.errors, "message" : "Failure"}, status=status.HTTP_400_BAD_REQUEST)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
		
	def delete(self,request):
		try:
			data = request.data
			cart,_ = Order.objects.get_or_create(user = request.user, payment_status = False)
			orderitem = OrderItem.objects.get(order = cart, product = data["product"])
			cart.total_amount -= (orderitem.price * orderitem.quantity)
			cart.save()
			orderitem.delete()
			return Response({"status" : True ,"data" : {}, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)
		
class OrderAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	
	def get(self,request):
		try:
			orders = Order.objects.filter(user = request.user, payment_status = False)
			serializer = OrderSerializer(orders, many = True)
			data = {}
			data["details"] = serializer.data
			orderitems = OrderItem.objects.filter(order = data["id"])
			oi_serializer = OrderItemSerializer(orderitems, many = True)
			data["products"] = oi_serializer.data
			return Response({"status" : True ,"data" : data, "message" : 'Success'},status = status.HTTP_200_OK)
		except Exception as e:
			return Response({"status" : False ,"data" : {}, "message" : f"{e}"}, status=status.HTTP_400_BAD_REQUEST)