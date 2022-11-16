from app.models import db, Vote

def seed_votes():
    vote1 = Vote(
        userId=1, questionId=3, voteDirection='Up'
    )
    vote2 = Vote(
        userId=2, questionId=1, voteDirection='Up'
    )
    vote3 = Vote(
        userId=3, questionId=2, voteDirection='Up'
    )
    vote4 = Vote(
        userId=4, questionId=9, voteDirection='Up'
    )
    vote5 = Vote(
        userId=3, questionId=9, voteDirection='Up'
    )
    vote6 = Vote(
        userId=2, questionId=9, voteDirection='Up'
    )
    vote7 = Vote(
        userId=1, questionId=9, voteDirection='Up'
    )
    vote8 = Vote(
        userId=3, questionId=9, voteDirection='Up'
    )
    vote9 = Vote(
        userId=1, questionId=1, voteDirection='Up'
    )
    vote10 = Vote(
        userId=2, questionId=1, voteDirection='Up'
    )
    vote11 = Vote(
        userId=4, questionId=2, voteDirection='Up'
    )
    vote12 = Vote(
        userId=4, questionId=2, voteDirection='Up'
    )
    vote13 = Vote(
        userId=4, questionId=3, voteDirection='Up'
    )
    vote14 = Vote(
        userId=4, questionId=3, voteDirection='Up'
    )
    vote15 = Vote(
        userId=4, questionId=3, voteDirection='Up'
    )
    vote16 = Vote(
        userId=2, questionId=3, voteDirection='Up'
    )
    vote17 = Vote(
        userId=2, questionId=4, voteDirection='Up'
    )
    vote18 = Vote(
        userId=3, questionId=4, voteDirection='Up'
    )
    vote19 = Vote(
        userId=3, questionId=4, voteDirection='Up'
    )
    vote20 = Vote(
        userId=3, questionId=4, voteDirection='Up'
    )
    vote21 = Vote(
        userId=3, questionId=5, voteDirection='Up'
    )
    vote22 = Vote(
        userId=3, questionId=6, voteDirection='Up'
    )
    vote23 = Vote(
        userId=3, questionId=7, voteDirection='Up'
    )
    vote24 = Vote(
        userId=3, questionId=8, voteDirection='Up'
    )
    vote25 = Vote(
        userId=3, questionId=2, voteDirection='Up'
    )
    vote26 = Vote(
        userId=3, questionId=1, voteDirection='Up'
    )
    vote27 = Vote(
        userId=3, questionId=1, voteDirection='Up'
    )
    vote28 = Vote(
        userId=3, questionId=1, voteDirection='Up'
    )
    vote29 = Vote(
        userId=3, questionId=3, voteDirection='Up'
    )
    vote30 = Vote(
        userId=3, questionId=3, voteDirection='Up'
    )
    vote31 = Vote(
        userId=1, questionId=9, voteDirection='Up'
    )
    vote32 = Vote(
        userId=2, questionId=9, voteDirection='Up'
    )
    vote33 = Vote(
        userId=3, questionId=10, voteDirection='Up'
    )
    vote34 = Vote(
        userId=4, questionId=10, voteDirection='Up'
    )
    vote35 = Vote(
        userId=3, questionId=11, voteDirection='Up'
    )
    vote36 = Vote(
        userId=2, questionId=11, voteDirection='Up'
    )
    vote37 = Vote(
        userId=1, questionId=12, voteDirection='Up'
    )
    vote38 = Vote(
        userId=3, questionId=12, voteDirection='Up'
    )
    vote39 = Vote(
        userId=1, questionId=13, voteDirection='Up'
    )
    vote40 = Vote(
        userId=2, questionId=13, voteDirection='Up'
    )
    vote41 = Vote(
        userId=4, questionId=14, voteDirection='Up'
    )
    vote42 = Vote(
        userId=4, questionId=14, voteDirection='Up'
    )
    vote43 = Vote(
        userId=4, questionId=15, voteDirection='Up'
    )
    vote44 = Vote(
        userId=4, questionId=15, voteDirection='Up'
    )
    vote45 = Vote(
        userId=4, questionId=16, voteDirection='Up'
    )
    vote46 = Vote(
        userId=2, questionId=16, voteDirection='Up'
    )
    vote47 = Vote(
        userId=2, questionId=17, voteDirection='Up'
    )
    vote48 = Vote(
        userId=3, questionId=17, voteDirection='Up'
    )
    vote49 = Vote(
        userId=3, questionId=18, voteDirection='Up'
    )
    vote50 = Vote(
        userId=3, questionId=18, voteDirection='Up'
    )
    vote51 = Vote(
        userId=3, questionId=19, voteDirection='Up'
    )
    vote52 = Vote(
        userId=3, questionId=19, voteDirection='Up'
    )
    vote53 = Vote(
        userId=3, questionId=19, voteDirection='Up'
    )
    vote54 = Vote(
        userId=3, questionId=19, voteDirection='Up'
    )
    vote55 = Vote(
        userId=3, questionId=19, voteDirection='Up'
    )
    vote56 = Vote(
        userId=3, questionId=20, voteDirection='Up'
    )
    vote57 = Vote(
        userId=3, questionId=20, voteDirection='Up'
    )
    vote58 = Vote(
        userId=3, questionId=21, voteDirection='Up'
    )
    vote59 = Vote(
        userId=3, questionId=21, voteDirection='Up'
    )
    vote60 = Vote(
        userId=3, questionId=21, voteDirection='Up'
    )
    vote61 = Vote(
        userId=3, questionId=22, voteDirection='Down'
    )
    vote62 = Vote(
        userId=3, questionId=23, voteDirection='Up'
    )
    vote63 = Vote(
        userId=3, questionId=23, voteDirection='Up'
    )
    vote64 = Vote(
        userId=3, questionId=23, voteDirection='Up'
    )
    vote65 = Vote(
        userId=3, questionId=23, voteDirection='Up'
    )
    vote66 = Vote(
        userId=3, questionId=25, voteDirection='Up'
    )
    vote67 = Vote(
        userId=3, questionId=25, voteDirection='Up'
    )
    vote68 = Vote(
        userId=3, questionId=25, voteDirection='Up'
    )
    vote69 = Vote(
        userId=3, questionId=25, voteDirection='Up'
    )
    vote70 = Vote(
        userId=3, questionId=25, voteDirection='Up'
    )

    db.session.add(vote1)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.add(vote4)
    db.session.add(vote5)
    db.session.add(vote6)
    db.session.add(vote7)
    db.session.add(vote8)
    db.session.add(vote9)
    db.session.add(vote10)
    db.session.add(vote11)
    db.session.add(vote12)
    db.session.add(vote13)
    db.session.add(vote14)
    db.session.add(vote15)
    db.session.add(vote16)
    db.session.add(vote17)
    db.session.add(vote18)
    db.session.add(vote19)
    db.session.add(vote20)
    db.session.add(vote21)
    db.session.add(vote22)
    db.session.add(vote23)
    db.session.add(vote24)
    db.session.add(vote25)
    db.session.add(vote26)
    db.session.add(vote27)
    db.session.add(vote28)
    db.session.add(vote29)
    db.session.add(vote30)
    db.session.add(vote31)
    db.session.add(vote32)
    db.session.add(vote33)
    db.session.add(vote34)
    db.session.add(vote35)
    db.session.add(vote36)
    db.session.add(vote37)
    db.session.add(vote38)
    db.session.add(vote39)
    db.session.add(vote40)
    db.session.add(vote41)
    db.session.add(vote42)
    db.session.add(vote43)
    db.session.add(vote44)
    db.session.add(vote45)
    db.session.add(vote46)
    db.session.add(vote47)
    db.session.add(vote48)
    db.session.add(vote49)
    db.session.add(vote50)
    db.session.add(vote51)
    db.session.add(vote52)
    db.session.add(vote53)
    db.session.add(vote54)
    db.session.add(vote55)
    db.session.add(vote56)
    db.session.add(vote57)
    db.session.add(vote58)
    db.session.add(vote59)
    db.session.add(vote60)
    db.session.add(vote61)
    db.session.add(vote62)
    db.session.add(vote63)
    db.session.add(vote64)
    db.session.add(vote65)
    db.session.add(vote66)
    db.session.add(vote67)
    db.session.add(vote68)
    db.session.add(vote69)
    db.session.add(vote70)

    db.session.commit()

def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()
