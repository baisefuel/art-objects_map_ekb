from django.db import models


class ArtObject(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    photo = models.ImageField()

    def __str__(self):
        return self.name
