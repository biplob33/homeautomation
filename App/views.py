from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def get_details(request):
    tabs = ['Battery', 'Solar', 'Water']
    details = [
        {"Percentage":30,"Voltage":"13.6 V"},
        {"State":1,"Voltage":"13.6 V","Current":"10.6 A"},
        {"Percentage":40,"Motor_State":"OFF"}
    ]
    return JsonResponse({"tabs":tabs,"details":details})

def home(request):
    return render(request,'index.html')