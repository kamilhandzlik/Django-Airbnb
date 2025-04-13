from rest_framework import serializers
from .models import Property


class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = [
            "id",
            "title",
            "description",
            "price_per_night",
            "image_url",
        ]
