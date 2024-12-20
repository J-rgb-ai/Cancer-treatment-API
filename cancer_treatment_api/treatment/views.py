from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Patient, Doctor, Treatment, Appointment
from .serializers import PatientSerializer, DoctorSerializer, TreatmentSerializer, AppointmentSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to the Cancer Treatment API</h1>")

class PatientListCreate(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class DoctorListCreate(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class TreatmentListCreate(generics.ListCreateAPIView):
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializer

class AppointmentListCreate(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer