from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Page(models.Model):
    category = models.ForeignKey('Category', on_delete=models.SET_DEFAULT, default=1)
    url = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=512, default='')
    display_canvas = models.BooleanField(default=True)
    passive = models.BooleanField(default=False)
    date_added = models.DateTimeField('date created')

    def __str__(self):
        return self.title

class Category(models.Model):
    oid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
