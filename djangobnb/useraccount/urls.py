from django.urls import path
from dj_rest_auth.jwt_auth import get_refresh_view
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, PasswordChangeView, PasswordResetView, PasswordResetConfirmView
from rest_framework_simplejwt.views import TokenVerifyView


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
            path("login/", LoginView.as_view(), name="login"),
            path("logout/", LogoutView.as_view(), name="logout"),
            ]