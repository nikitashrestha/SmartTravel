from django.db import models


class query_db(models.Model):
    address=models.CharField(max_length=30)


