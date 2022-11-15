from app.models import db, Answer

def seed_answers():
    # Answers to t/AskThreaddit
    answer1 = Answer(
        userId=3, questionId=1, body='Yes, that would be amazing. Now how can we make this possible?'
    )
    answer2 = Answer(
        userId=1, questionId=2, body='Rules of contact. The planet may not still be at war with themselves The planet must not be at risk of immediate destruction from their own society The planet must have a technological ability to go to and thrive among the stars. The planet must have given up any of the 5 known causes of intergalatic violence in their society.'
    )
    answer3 = Answer(
        userId=2, questionId=3, body='I was working as a stockboy in a supermarket and when we had to fill the milk cooler people would bust open a 12 pack of milk cartons and put them in one by one. On my first day I just placed the 12 pack in the cooler and cut the plastic off on one side with my box cutter and yanked it from under it and the look of the store manager and the other employee who was training me was pure bewilderment.'
    )
    answer4 = Answer(
        userId=5, questionId=4, body='It is a website that has compiled Psychology topics into easy to read modules. They have been compiled by psychology university professors to help facilitate free education for students. You can even download the ones you are interested as a PDF as many times as you want. All of this is free!'
    )
    answer5 = Answer(
        userId=4, questionId=5, body='Solar energy + desalination + gene therapy.'
    )
    # Part 2
    answer6 = Answer(
        userId=5, questionId=1, body='I would feel like "finally. Lawmakers taking the publics issues to heart."'
    )
    answer7 = Answer(
        userId=4, questionId=2, body='And crop circles are just teenager aliens doing graffitti.'
    )
    answer8 = Answer(
        userId=2, questionId=3, body='The clerk was asked to bring 145 white papers into the office. He does not want to count the papers manually so he printed 145 blank sheets and took them in.'
    )
    answer9 = Answer(
        userId=3, questionId=4, body='OpenLearn from the UKs Open University - free courses for all levels of study, samples of university materials, study skills nd tie-ins to BBC documentaries. Everything under Creative Commons license so you can use it as you see fit.'
    )
    answer10 = Answer(
        userId=1, questionId=5, body='All 7 of my Honeybee colonies are currently surviving the winter, and today they are bringing in the first pollen of the year.'
    )
    # Answers to t/Gaming
    answer11 = Answer(
        userId=2, questionId=6, body='Me (just entering a room): oh nice… Companion: maybe you could open those doors by freezing the water above that wheel'
    )
    answer12 = Answer(
        userId=1, questionId=7, body='I think people are wrongly blaming cost. Cost would have been similar to regular mo-cap if it had ever been reused, rather than being a one-off project.'
    )
    answer13 = Answer(
        userId=4, questionId=8, body='Pac-man'
    )
    answer14 = Answer(
        userId=3, questionId=9, body='Webkinz'
    )
    answer15 = Answer(
        userId=5, questionId=10, body='Assassin creed blackflag'
    )
    # Part 2
    answer16 = Answer(
        userId=5, questionId=6, body='Well, you travel with the smartest man alive, it is ultra realistic'
    )
    answer17 = Answer(
        userId=4, questionId=7, body='That game taught me that I suck at reading facial expressions.'
    )
    answer18 = Answer(
        userId=2, questionId=8, body='Weapon-based: Sekiro, Hand-to-hand: Batman Arkham Series'
    )
    answer19 = Answer(
        userId=3, questionId=9, body='Runescape'
    )
    answer20 = Answer(
        userId=1, questionId=10, body='Sid Meiers Pirates'
    )
    # Answers to t/Movies
    answer21 = Answer(
        userId=2, questionId=11, body='Lionel Hutz.'
    )
    answer22 = Answer(
        userId=1, questionId=12, body='Ghost Rider 2, it is like every one just agreed to just make a Nicolas Cage movie instead of a Ghost Rider sequel.'
    )
    answer23 = Answer(
        userId=4, questionId=13, body='Office Space is perhaps the one that continues to hold up for me. Definitely not the most artistically accomplished or groundbreaking film put out this year. (See Magnolia or the Matrix) But I will be damned if I do not watch that movie and love every minute. It is a tight comedy that has aged very well.'
    )
    answer24 = Answer(
        userId=3, questionId=14, body='Dredd'
    )
    answer25 = Answer(
        userId=5, questionId=15, body='Vito Corleone, for Marlon Brando and Robert de Niro, Godfather 1 & 2.'
    )
    # Part 2
    answer26 = Answer(
        userId=5, questionId=11, body='Bruce Waynes lawyers in Dark knight rises.'
    )
    answer27 = Answer(
        userId=4, questionId=12, body='Dont forget how Hulk Hogen threatened all the Gremlins mid movie to stop messing around with the film so folks could enjoy the movie brother!'
    )
    answer28 = Answer(
        userId=2, questionId=13, body='I was at the movies a lot in 1999, but nothing compared to how it felt to see The Matrix for the first time.'
    )
    answer29 = Answer(
        userId=3, questionId=14, body='Kiss kiss bang bang. I never wanted the bromance to end...'
    )
    answer30 = Answer(
        userId=1, questionId=15, body='DeBose and Moreno for the two West Side Storys'
    )
    # Answers to t/DoesAnybodyElse
    answer31 = Answer(
        userId=2, questionId=16, body='Story of my life since I was a teenager now almost 30 lol'
    )
    answer32 = Answer(
        userId=1, questionId=17, body='Yeah and then when they say they do not like it you sort of start to have a different feeling about the song.'
    )
    answer33 = Answer(
        userId=4, questionId=18, body='Yes and I would absolutely love to hear any tips of avoiding this!! Except for pretending the “thing to do” is not actually happening - ugh!'
    )
    answer34 = Answer(
        userId=3, questionId=19, body='Yes! I love doing that. It happens on my phone and on my work computer. I like seeing what the results are when it unfreezes because I want to see if I could type everything correctly without being able to see it in real time.'
    )
    answer35 = Answer(
        userId=5, questionId=20, body='Or I will rewind 30 seconds because I did not give my favorite part my all in the dramatic first grab'
    )
    # Part 2
    answer36 = Answer(
        userId=5, questionId=16, body='Revenge bedtime procrastination at its finest'
    )
    answer37 = Answer(
        userId=4, questionId=17, body='Yeah I like enjoying music by myself... some songs are just too deep that they make me uncomfortable sharing with other people'
    )
    answer38 = Answer(
        userId=2, questionId=18, body='It almost feels like a countdown, and I cannot enjoy my time without, worrying about it. Even if it is nothing to even worry about.'
    )
    answer39 = Answer(
        userId=3, questionId=19, body='Yes but half the time it’s REALLY FROZEN and only registers the last few characters.'
    )
    answer40 = Answer(
        userId=1, questionId=20, body='Allllll the time'
    )
    # Answers to t/AskScience
    answer41 = Answer(
        userId=2, questionId=21, body='In Australia - where there is ocean to the south of us all the way to Antarctica - we can get cold fronts during the middle of summer that can bring freezing conditions at altitude'
    )
    answer42 = Answer(
        userId=1, questionId=22, body='Yes, they are indeed way more susceptible to lightning strikes. But they have evolved over centuries to endure it.'
    )
    answer43 = Answer(
        userId=4, questionId=23, body='The researchers found that the answer depends both on the variant of the exercise as well as the stage of the exercise. For example, in a traditional push-up the number is about 69 percent in the up position (at the top of the movement) and 75 percent in the down position (bottom of the movement).'
    )
    answer44 = Answer(
        userId=3, questionId=24, body='Most hand sanitizers use alcohol, which kills indiscriminately. It would kill us if we did not have livers to filter it, and in high enough doses will kill anyway. Some germs survive due to randomly being out of contact, in nooks and crannies and such, not due to any mechanism that might be selected for.'
    )
    answer45 = Answer(
        userId=5, questionId=25, body='Sleeping literally changes our very physiology. Our core body temperature drops which allows certain proteins to work differently than they do during our "waking temp," as a broad example. It is not something we would want easy control over.'
    )
    # Part 2
    answer46 = Answer(
        userId=5, questionId=21, body='Hmmmm that is very curious. I have no idea but you bring up an excellent point.'
    )
    answer47 = Answer(
        userId=4, questionId=22, body='Wow, I wonder if tall humans experience the same problem?'
    )
    answer48 = Answer(
        userId=2, questionId=23, body='Push ups are horrible for you and will make you less likely to end up on a game show. Be smart, it is not worth it.'
    )
    answer49 = Answer(
        userId=3, questionId=24, body='This is why you are not supposed to ingest hand sanitizer, it will give you really bad hiccups.'
    )
    answer50 = Answer(
        userId=1, questionId=25, body='I personally get to decide to be asleep. I can sleep anywhere I want whenever I want. I am sleeping right now in fact.'
    )

    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.add(answer6)
    db.session.add(answer7)
    db.session.add(answer8)
    db.session.add(answer9)
    db.session.add(answer10)
    db.session.add(answer11)
    db.session.add(answer12)
    db.session.add(answer13)
    db.session.add(answer14)
    db.session.add(answer15)
    db.session.add(answer16)
    db.session.add(answer17)
    db.session.add(answer18)
    db.session.add(answer19)
    db.session.add(answer20)
    db.session.add(answer21)
    db.session.add(answer22)
    db.session.add(answer23)
    db.session.add(answer24)
    db.session.add(answer25)
    db.session.add(answer26)
    db.session.add(answer27)
    db.session.add(answer28)
    db.session.add(answer29)
    db.session.add(answer30)
    db.session.add(answer31)
    db.session.add(answer32)
    db.session.add(answer33)
    db.session.add(answer34)
    db.session.add(answer35)
    db.session.add(answer36)
    db.session.add(answer37)
    db.session.add(answer38)
    db.session.add(answer39)
    db.session.add(answer40)
    db.session.add(answer41)
    db.session.add(answer42)
    db.session.add(answer43)
    db.session.add(answer44)
    db.session.add(answer45)
    db.session.add(answer46)
    db.session.add(answer47)
    db.session.add(answer48)
    db.session.add(answer49)
    db.session.add(answer50)

    db.session.commit()

def undo_answers():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
