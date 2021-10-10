from django.db.models import fields
from rest_framework.serializers import ModelSerializer, ValidationError
from rest_framework.validators import UniqueTogetherValidator
from django.contrib.auth.models import User
import re

# from django.contrib.auth.hashers import make_password

class UserSerializer(ModelSerializer):

    def validate_password(self, value):
        if len(value) < 6:
            raise ValidationError("Ensure this field has more than 6 characters")
        return value

    def validate_email(self, value):
        if value and User.objects.filter(email__exact=value).exists():
            raise ValidationError("This field must be unique.")
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if(re.match(regex, value)):
            raise ValidationError("Enter a valid email address.")
        if len(value)==0:
            raise ValidationError("This field must not be blank.")
        return value

 

    def validate_username(self,value):
        if len(value) > 32:
            raise ValidationError("Ensure this field has no more than 32 characters.")
        if len(value)==0:
            raise ValidationError("This field must not be blank.")
        if value and User.objects.filter(username__exact=value).exists():
            raise ValidationError("This field must be unique.")
        return value
    

    class Meta:
        model = User
        fields = ['pk','username','first_name','last_name','password','email']

        validators = [
            UniqueTogetherValidator(
                queryset = User.objects.all(),
                fields = ['username','email']   
            )
        ]

        # extra_kwargs = {
        #     'password':{'write_only':True}
        # }

        # def create(self, validated_data):
        #     password = validated_data.pop('password',None)
        #     instance = self.Meta.model(**validated_data)
        #     if password is not None:
        #         instance.make_password(password)
        #     instance.save()
        #     return instance