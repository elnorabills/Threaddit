from app.models import db, Question

def seed_questions():
    # t/AskThreaddit (5 Questions)
    question1 = Question(
        userId=1 ,title='How would you feel about a law that bans radio stations from playing commercials with honking/beeping/siren noises in them?', body=None, postCategory='askThreaddit'
    )
    question2 = Question(
        userId=2 ,title='What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we are here but they have agreed not to contact us until we figure it out for ourselves?', body=None, postCategory='askThreaddit'
    )
    question3 = Question(
        userId=3 ,title='Bill Gates said, "I will always choose a lazy person to do a difficult job because a lazy person will find an easy way to do it." What is a real-life example of this?', body=None, postCategory='askThreaddit'
    )
    question4 = Question(
        userId=4 ,title='What free things online should everyone take advantage of?', body=None, postCategory='askThreaddit'
    )
    question5 = Question(
        userId=5 ,title='With all the negative headlines dominating the news these days, it can be difficult to spot signs of progress. What makes you optimistic about the future?', body=None, postCategory='askThreaddit'
    )
    # t/Gaming (5 questions)
    question6 = Question(
        userId=1 ,title='Why does God of War Ragnorok treat me like a child?', body='Is this a kids game or something? Because it seems to think I must only be like 8 years old with how quickly it gives me the puzzle solutions. It is annoying, let me figure it out for myself instead of waiting a minute and then having someone essentially tell me the answer.', postCategory='gaming'
    )
    question7 = Question(
        userId=2 ,title='Why do we not see more games utilizing the facial animation techniques from LA Noire?', body=None, postCategory='gaming'
    )
    question8 = Question(
        userId=3 ,title='What game has mastered 3rd person combat?', body=None, postCategory='gaming'
    )
    question9 = Question(
        userId=4 ,title='What game is the most nostalgic for you?', body=None, postCategory='gaming'
    )
    question10 = Question(
        userId=5 ,title='What is your favorite pirate game?', body='I really love anything and everything to do with pirates and want to play all the games that have to do with being a pirate. Yaaarrrggg.', postCategory='gaming'
    )
    # t/Movies (5 questions)
    question11 = Question(
        userId=1 ,title='We always hear about who are the best movie lawyers? However, I want to hear: Who are the worst/incompetent movie lawyers?', body='We always hear about the best lawyers, like Atticus Finch in To Kill a Mockingbird. However, what are some examples of the worst or most incompetent movie lawyers. I got this idea from re-watching Con Air and Cameron Poes lawyer, despite having one of the most clear-cut cases of self-defence in history, tells Cameron he should plead guilty to killing the attacker at the bar. Not only that, he gets way more jail time than his lawyer tells him. What are some examples?', postCategory='movies'
    )
    question12 = Question(
        userId=2 ,title='What movie sequel is insane compared to the original?', body='I watched Gremlins 2 for the first time in years the other day and wow, that movie is wacky when compared to the original. It breaks the fourth wall numerous times, such as having Leonard Maltin getting attacked while reviewing the first Gremlins, and really comes off as almost a parody of that movie.', postCategory='movies'
    )
    question13 = Question(
        userId=3 ,title='What is your favorite movie from 1999? (Eyes Wide Shut, Fight Club, Magnolia, The Matrix, etc.)', body=None, postCategory='movies'
    )
    question14 = Question(
        userId=4 ,title='Films that warrant a sequel but did not get one?...', body='Had this discussion at work, I had to come up with a sequel I would like to see that never got made and I am really struggling. Everything I think of makes sense as a stand-alone movie that does notneed a sequel. My mate came up with True Lies, which I think is a good choice. It requires some thought as it has to make sense, for example; Shawshank Redemption does not work cause it would just be Andy painting some boats in Mexico, boring. What are your suggestions?', postCategory='movies'
    )
    question15 = Question(
        userId=5 ,title='Besides the Joker, has any specific character ever won an Oscar for two different actors in two different movies?', body='Heath Ledger posthumously won an Oscar for his portrayal of "The Joker" in The Dark Knight, and Joaquin Phoenix won one for his portrayal of the same character in 2020s "Joker." Is there any other specific character that two different actors have ever won two different actors Oscars for their portrayal?', postCategory='movies'
    )
    # t/DoesAnybodyElse
    question16 = Question(
        userId=1 ,title='What is your favorite pirate game?', body='', postCategory='t/DoesAnybodyElse'
    )
    question17 = Question(
        userId=2 ,title='What is your favorite pirate game?', body='', postCategory='t/DoesAnybodyElse'
    )
    question18 = Question(
        userId=3 ,title='What is your favorite pirate game?', body='', postCategory='t/DoesAnybodyElse'
    )
    question19 = Question(
        userId=4 ,title='What is your favorite pirate game?', body='', postCategory='t/DoesAnybodyElse'
    )
    question20 = Question(
        userId=5 ,title='What is your favorite pirate game?', body='', postCategory='t/DoesAnybodyElse'
    )

    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)
    db.session.add(question6)
    db.session.add(question7)
    db.session.add(question8)

    db.session.commit()

def undo_questions():
    db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.commit()
