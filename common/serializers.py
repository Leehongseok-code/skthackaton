from rest_framework import serializers
from django.contrib.auth import authenticate 
class LoginSerializer(serializers.Serializer):

    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True) 

    def validate(self, data): 
        print(data)
        user = authenticate(username=data['username'], password=data['password']) 
        print(user)
        if user is None:
            raise serializers.ValidationError('아이디 혹은 비밀번호가 잘못되었습니다') 
        data['user']=user
        print(data)
        return data
    class SignUpSerializer(serializers.ModelSerializer): 
# password2는 따로 없기 때문에 추가로 만들어 주어야 한다.
password2 = serializers.CharField(style={'input_type':'password'}, write_only=True) 
class Meta:
"""
기본적으로 User의 속성을 모두 가져가고, password2는 추가적으로 가져간다. 
"""
    model = User
    fields = ['username', 'email', 'password','password2'] 
    extra_kwargs = {
        'password' : {'write_only':True} 
    }
def validate(self, data): 
    user = User(
        username = data['username'] 
    )
    password = data['password'] 
    password2 = data['password2']
    if password != password2:
        raise serializers.ValidationError({'password':'Passwords must match'}) 
    user.set_password(password)
    user.save() 
    return user