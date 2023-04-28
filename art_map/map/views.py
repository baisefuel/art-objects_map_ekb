from django.shortcuts import render
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models.functions import Distance
from django.conf import settings
from leaflet.forms.widgets import LeafletWidget
from .models import Place

def place_map(request):
    user_location = request.user.profile.location
    user_location_point = Point(user_location.x, user_location.y, srid=4326)
    places = Place.objects.annotate(distance=Distance('location', user_location_point)).order_by('distance')
    form = PlaceForm()
    return render(request, 'place_map.html', {'places': places, 'form': form, 'mapbox_access_token': settings.MAPBOX_ACCESS_TOKEN})