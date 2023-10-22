# Generated by Django 4.2.6 on 2023-10-19 21:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicField',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('academicField', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Specialty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specialty', models.CharField(max_length=200)),
                ('academicField', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.academicfield')),
            ],
        ),
        migrations.CreateModel(
            name='TypeUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('typeUser', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('institution', models.CharField(max_length=50)),
                ('codeInstitutional', models.CharField(max_length=20)),
                ('phoneNumber', models.CharField(max_length=20)),
                ('specialty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.specialty')),
                ('typeUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.typeuser')),
            ],
        ),
        migrations.CreateModel(
            name='CredentialsUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userName', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
    ]