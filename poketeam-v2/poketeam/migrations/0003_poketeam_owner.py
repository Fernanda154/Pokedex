# Generated by Django 4.1.4 on 2022-12-18 16:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('poketeam', '0002_auto_20220324_1901'),
    ]

    operations = [
        migrations.AddField(
            model_name='poketeam',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
