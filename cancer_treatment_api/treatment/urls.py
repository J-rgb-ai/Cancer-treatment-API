from django.urls import path
from .views import PatientListCreate, PatientDetail, DoctorListCreate, DoctorDetail, TreatmentListCreate, AppointmentListCreate

urlpatterns = [
    path('patients/', PatientListCreate.as_view(), name='patient-list'),
    path('patients/<int:pk>/', PatientDetail.as_view(), name='patient-detail'),
    path('doctors/', DoctorListCreate.as_view(), name='doctor-list'),
    path('doctors/<int:pk>/', DoctorDetail.as_view(), name='doctor-detail'),
    path('treatments/', TreatmentListCreate.as_view(), name='treatment-list'),
    path('appointments/', AppointmentListCreate.as_view(), name='appointment-list'),
]