from django.http import JsonResponse
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from .models import Property
from .serializers import PropertiesListSerializer, CreatePropertiesListSerializer


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)

    return JsonResponse(
        {
            "data": serializer.data,
        }
    )


@api_view(["POST"])
@authentication_classes([])  
@permission_classes([])
def create_property(request):
    serializer = CreatePropertiesListSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(
            {
                "data": serializer.data,
            },
            status=201,
        )
    return JsonResponse(
        {
            "error": serializer.errors,
        }, status=400)