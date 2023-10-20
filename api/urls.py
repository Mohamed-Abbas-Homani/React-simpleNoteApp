from django.urls import path
from .views import ListNotes, GetNote, UpdateNote, CreatNote, DeleteNote


urlpatterns = [
    path('notes', ListNotes),
    path('notes/<str:id>',  GetNote),
    path('notes/update/<str:pk>', UpdateNote),
    path('notes/create/', CreatNote),
    path('notes/delete/<str:pk>', DeleteNote),
]
