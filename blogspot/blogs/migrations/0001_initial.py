# Generated by Django 3.2.7 on 2021-09-15 08:58

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('blog_id', models.AutoField(primary_key=True, serialize=False)),
                ('blog_name', models.TextField(blank=True, null=True)),
                ('blog_desc', models.TextField(blank=True, null=True)),
                ('blog_content', models.TextField(blank=True, null=True)),
                ('blog_creation', models.DateTimeField(default=datetime.datetime(2021, 9, 15, 8, 58, 53, 609152, tzinfo=utc))),
                ('blog_updation', models.DateTimeField(default=None, null=True)),
            ],
        ),
    ]