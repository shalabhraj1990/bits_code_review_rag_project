# Generated by Django 5.1.6 on 2025-02-28 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vericode_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SummarizeLlmModels',
            fields=[
                ('model_id', models.AutoField(primary_key=True, serialize=False)),
                ('model_name', models.CharField(max_length=500)),
                ('model_url', models.EmailField(max_length=1000)),
            ],
        ),
    ]
