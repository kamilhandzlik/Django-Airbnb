# Generated by Django 4.2.20 on 2025-04-25 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='image',
            field=models.ImageField(upload_to='../media/uploads/properties/'),
        ),
    ]
