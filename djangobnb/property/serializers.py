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


class CreatePropertiesListSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    
    class Meta:
        model = Property
        fields = [
            "id",
            "title",
            "description",
            "price_per_night",
            "bedrooms",
            "bathrooms",
            "guests",
            "country",
            "country_code",
            "category",
            "image",
            "landlord",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]
        
