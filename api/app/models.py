from app.database import get_db

class Appointment:
    def __init__(self, id=None, date=None, service=None, reserved_by=None, active=None):
        self.id = id
        self.date = date
        self.service = service
        self.reserved_by = reserved_by
        self.active = active

    @staticmethod
    def __get_appointments(query):
        conn = get_db()
        cur = conn.cursor()
        cur.execute(query)
        rows = cur.fetchall()

        appointments = []
        for row in rows:
            appointments.append (
                Appointment (
                    id=row[0],
                    date=row[1],
                    service=row[2],
                    reserved_by=row[3],
                    active=row[4]
                )
            )
        cur.close()
        return appointments

    @staticmethod
    def get_all_active():
        return Appointment.__get_appointments(
            """
                SELECT *
                FROM appointment
                WHERE active = TRUE
                ORDER BY date DESC;
            """
        )

    @staticmethod
    def get_by_id(id):
        conn = get_db()
        cur = conn.cursor()
        cur.execute(
            """
                SELECT *
                FROM appointment
                WHERE id = %s;
            """,
            (id,)
        )
        row = cur.fetchone()
        cur.close()

        if row is None:
            return None

        return Appointment(
            id=row[0],
            date=row[1],
            service=row[2],
            reserved_by=row[3],
            active=row[4]
        )

    def save(self):
        conn = get_db()
        cur = conn.cursor()
        if self.id:
            pass
        else:
            cur.execute(
                """
                    INSERT INTO appointment (service, reserved_by)
                    VALUES (%s, %s)
                """,
                (self.service, self.reserved_by))
            self.id = cur.lastrowid
        conn.commit()
        cur.close()

    def serialize(self):
        return {
            'id': self.id,
            'date': self.date.strftime('%Y/%m/%d %H:%M:%S'),
            'service': self.service,
            'reserved_by': self.reserved_by,
            'active': self.active
        }