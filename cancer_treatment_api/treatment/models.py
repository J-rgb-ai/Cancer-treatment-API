from django.db import models

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    cancer_type = models.CharField(max_length=100)
    diagnosis_date = models.DateField()
    contact_info = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    contact_info = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Treatment(models.Model):
    cancer_type = models.CharField(max_length=100)
    treatment_type = models.CharField(max_length=100)  # e.g. chemotherapy, radiation
    description = models.TextField()

    def __str__(self):
        return self.treatment_type

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()

    def __str__(self):
        return f"{self.patient.name} with {self.doctor.name} on {self.appointment_date}"

