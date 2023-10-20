from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import NoteSerializer
from .models import Note

@api_view(['GET'])
def ListNotes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def GetNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def CreatNote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['PUT'])
def UpdateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    if not serializer.is_valid():
        return Response({'badrequest':'invalid'}, status=status.HTTP_400_BAD_REQUEST)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

@api_view(['DELETE'])
def DeleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response({'success':'note deleted'}, status=status.HTTP_202_ACCEPTED)