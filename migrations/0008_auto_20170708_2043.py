# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-08 17:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vectors', '0007_page_display_canvas'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='id',
        ),
        migrations.AlterField(
            model_name='category',
            name='oid',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
