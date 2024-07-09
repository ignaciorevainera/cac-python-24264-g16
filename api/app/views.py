from flask import jsonify, request
from app.models import Appointment
from datetime import date

def get_appointments():
    appointments = Appointment.get_all_active()
    return jsonify([appointment.serialize() for appointment in appointments])

def get_appointment(id):
    appointment = Appointment.get_by_id(id)
    if not appointment:
        return jsonify({'error': 'Appointment not found'}), 404
    return jsonify(appointment.serialize())

def create_appointment():
    data = request.json
    new_appointment = Appointment(
        date=date.today().strftime('%Y/%m/%d %H:%M:%S'),
        service=data['service'],
        reserved_by=data['reserved_by'],
        active=True
    )
    new_appointment.save()
    return jsonify({'message': 'Task created successfully'}), 201