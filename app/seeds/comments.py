from app.models import db, Comment

def seed_comments():
    # comments to t/AskThreaddit
    comment1 = Comment(
        userId=2, answerId=1, body='I agree! We should make a petition!'
    )
    comment2 = Comment(
        userId=1, answerId=2, body='We definitely do not qualify'
    )
    comment3 = Comment(
        userId=4, answerId=3, body='You are the hero they needed, but not the one they deserved.'
    )
    comment4 = Comment(
        userId=3, answerId=4, body='Very helpful tip, thank you!'
    )
    comment5 = Comment(
        userId=5, answerId=5, body='You cant forget double chocolate chunk brownies.'
    )
    # Part 2
    comment6 = Comment(
        userId=5, answerId=6, body='Lol I was thinking the same thing'
    )
    comment7 = Comment(
        userId=4, answerId=7, body='Hahahahahaha this gave me a good laugh'
    )
    comment8 = Comment(
        userId=2, answerId=8, body='Very clever, I am finding out I need to be more lazy in order to be more innovative'
    )
    comment9 = Comment(
        userId=3, answerId=9, body='This is a great piece of advice!'
    )
    comment = Comment(
        userId=1, answerId=, body='This is so wholesome, I immediately feel better now.'
    )
    # comments to t/Gaming
    comment11 = Comment(
        userId=2, answerId=11, body='I was just having this same conversation with my friend, it is ridiculous.'
    )
    comment12 = Comment(
        userId=1, answerId=12, body='Yes, this is an excellent point!'
    )
    comment13 = Comment(
        userId=4, answerId=13, body='You are so wise'
    )
    comment14 = Comment(
        userId=3, answerId=14, body='I didnt care about the stuffed animal, I just wanted the game tag.'
    )
    comment15 = Comment(
        userId=5, answerId=15, body='Assassin creed blackflag'
    )
    # Part 2
    comment16 = Comment(
        userId=5, answerId=16, body='Wrong. I am the smartest man alive and I am not even a man, I am a nova scotia toller.'
    )
    comment17 = Comment(
        userId=4, answerId=17, body='I will now play this game solely to try and get better at reading facial expressions.'
    )
    comment18 = Comment(
        userId=2, answerId=18, body='Yes.'
    )
    comment19 = Comment(
        userId=3, answerId=19, body='This brings me back to the golden days'
    )
    comment20 = Comment(
        userId=1, answerId=20, body='This one is the best hands down'
    )
    # comments to t/Movies
    comment21 = Comment(
        userId=2, answerId=21, body='Hahaha he is truly the worst'
    )
    comment22 = Comment(
        userId=1, answerId=22, body='That is why this movie is gold.'
    )
    comment23 = Comment(
        userId=4, answerId=23, body='I always forget how old this film actually is, but I fully agree.'
    )
    comment24 = Comment(
        userId=3, answerId=24, body='Agreed'
    )
    comment25 = Comment(
        userId=5, answerId=25, body='This makes sense'
    )
    # Part 2
    comment26 = Comment(
        userId=5, answerId=26, body='I do not know how that guy was allowed to become a lawyer. There is no way he would have passed the bar exam.'
    )
    comment27 = Comment(
        userId=4, answerId=27, body='This will forever go down in cinematic history.'
    )
    comment28 = Comment(
        userId=2, answerId=28, body='I would pay good money to go back in time and experience this'
    )
    comment29 = Comment(
        userId=3, answerId=29, body='The bromance lives on, in our hearts.'
    )
    comment30 = Comment(
        userId=1, answerId=30, body='the sharks and the jets'
    )
    # comments to t/DoesAnybodyElse
    comment31 = Comment(
        userId=2, answerId=31, body='Old habits die hard'
    )
    comment32 = Comment(
        userId=1, answerId=32, body='Or a different feeling about the person...'
    )
    comment33 = Comment(
        userId=4, answerId=33, body='This is easy, just cancel all future plans and then you can do whatever you want with nothing to worry about.'
    )
    comment34 = Comment(
        userId=3, answerId=34, body='I like watching the buttons slowly catch up, so satisfying.'
    )
    comment35 = Comment(
        userId=5, answerId=35, body='Yes, I have to give it my full attention out of respect.'
    )
    # Part 2
    comment36 = Comment(
        userId=5, answerId=36, body='Everything is just so much more interesting at night, especially when I know I should be sleeping.'
    )
    comment37 = Comment(
        userId=4, answerId=37, body='I agree, I always expect everyone else will appreciate it the way I do which is a good way to always be disappointed.'
    )
    comment38 = Comment(
        userId=2, answerId=38, body='Yes, like I am monitoring how many hours and minutes are left.'
    )
    comment39 = Comment(
        userId=3, answerId=39, body='This drives me crazy, how dare it waste my time like that'
    )
    comment40 = Comment(
        userId=1, answerId=40, body='Hahahahahha me too'
    )
    # comments to t/AskScience
    comment41 = Comment(
        userId=2, answerId=41, body='Australia is a wild lawless place'
    )
    comment42 = Comment(
        userId=1, answerId=42, body='Yes I believe this is correct, it has something to do with the cellular makeup of their fur'
    )
    comment43 = Comment(
        userId=4, answerId=43, body='Step one: be able to do a pushup'
    )
    comment44 = Comment(
        userId=3, answerId=44, body='So basically we should sand down any nooks and crannies on our hands that any germs could be hiding?? This sounds like the easiest solution.'
    )
    comment45 = Comment(
        userId=5, answerId=45, body='Are you some kind of sleep scientist?? Why should I believe you??'
    )
    # Part 2
    comment46 = Comment(
        userId=5, answerId=46, body='I am also quite clueless.'
    )
    comment47 = Comment(
        userId=4, answerId=47, body='Yes we do, I am very tall and I have been struck by lightning 5 times, I now have a super power.'
    )
    comment48 = Comment(
        userId=2, answerId=48, body='Good point, none of us should ever be deprived of being on a televised game show.'
    )
    comment49 = Comment(
        userId=3, answerId=49, body='I also heard it can make you really bad at math'
    )
    comment50 = Comment(
        userId=1, answerId=50, body='Please teach me your ways, great magician.'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.add(comment28)
    db.session.add(comment29)
    db.session.add(comment30)
    db.session.add(comment31)
    db.session.add(comment32)
    db.session.add(comment33)
    db.session.add(comment34)
    db.session.add(comment35)
    db.session.add(comment36)
    db.session.add(comment37)
    db.session.add(comment38)
    db.session.add(comment39)
    db.session.add(comment40)
    db.session.add(comment41)
    db.session.add(comment42)
    db.session.add(comment43)
    db.session.add(comment44)
    db.session.add(comment45)
    db.session.add(comment46)
    db.session.add(comment47)
    db.session.add(comment48)
    db.session.add(comment49)
    db.session.add(comment50)


    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
