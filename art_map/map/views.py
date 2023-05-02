from django.shortcuts import render


def map_view(request):
    return render(request, 'map.html')

def about(request):
    return render(request, 'about.html')