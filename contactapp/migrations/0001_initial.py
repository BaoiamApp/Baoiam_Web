# Generated by Django 5.0.1 on 2024-01-09 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contact',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=13)),
                ('phone', models.CharField(max_length=100)),
                ('content', models.TextField()),
            ],
        ),
    ]
