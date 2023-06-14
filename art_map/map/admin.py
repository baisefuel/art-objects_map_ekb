from django.contrib import admin
from .models import ArtObject


class PostAdmin(admin.ModelAdmin):
    list_display = ('photo', 'text', 'description')


admin.site.register(ArtObject)